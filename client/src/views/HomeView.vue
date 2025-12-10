<template>
  <main class="home">
    <div class="container content-card">
      <header class="section-header">
        <h2>{{ t('home.subtitle') }}</h2>
        <p class="subtitle text-secondary">{{ t('home.description') }}</p>
      </header>

      <section class="ingredients-section">
        <form @submit.prevent="addIngredient" class="input-group">
          <label for="ingredient-input" class="visually-hidden">{{ t('home.addButton') }}</label>
          <input
            id="ingredient-input"
            v-model="newIngredient"
            type="text"
            :placeholder="t('home.ingredientsPlaceholder')"
            class="ingredient-input"
          />
          <button type="submit" class="btn btn-add">
            {{ t('home.addButton') }}
          </button>
        </form>

        <section v-if="ingredients.length > 0" class="ingredients-list" :aria-label="t('home.ingredientsTitle')">
          <h2>{{ t('home.ingredientsTitle') }}:</h2>
          <ul class="chips">
            <li v-for="(ingredient, index) in ingredients" :key="index" class="chip">
              {{ ingredient }}
              <button
                @click="removeIngredient(index)"
                class="chip-remove"
                :aria-label="`${t('common.close')} ${ingredient}`"
                type="button"
              >
                ×
              </button>
            </li>
          </ul>
        </section>

        <button
          @click="generateRecipe"
          :disabled="ingredients.length === 0 || loading"
          class="btn btn-primary btn-lg btn-generate"
          type="button"
        >
          {{ loading ? t('home.generating') : t('home.generateButton') }}
        </button>

        <aside v-if="error" class="error" role="alert">
          {{ error }}
        </aside>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useRecipeStore } from '@/stores/recipe.ts';

const router = useRouter();
const recipeStore = useRecipeStore();
const { t } = useI18n();

const newIngredient = ref('');
const ingredients = ref<string[]>([]);
const loading = ref(false);
const error = ref('');

const addIngredient = () => {
  const ingredient = newIngredient.value.trim();
  if (ingredient && !ingredients.value.includes(ingredient)) {
    ingredients.value.push(ingredient);
    newIngredient.value = '';
    error.value = '';
  }
};

const removeIngredient = (index: number) => {
  ingredients.value.splice(index, 1);
};

const generateRecipe = async () => {
  if (ingredients.value.length === 0) return;

  loading.value = true;
  error.value = '';

  try {
    await recipeStore.fetchRecipe(ingredients.value);
    router.push('/recipe');
  } catch (err) {
    error.value = err instanceof Error ? err.message : t('home.error');
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Layout específic HomeView */
.home {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.home .container {
  max-width: 1024px;
  width: 100%;
  margin-top: var(--spacing-lg);
}

.subtitle {
  margin-top: var(--spacing-sm);
  font-size: 0.9rem;
}

.ingredients-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.btn-add {
  background: var(--primary-green);
  color: white;
}

.btn-add:hover {
  background: var(--primary-green-dark);
  transform: translateY(-2px);
}

.btn-generate {
  margin-top: var(--spacing-md);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Tablet (481px+) */
@media (min-width: 481px) {
  .subtitle {
    font-size: 1rem;
  }
}

/* Desktop (769px+) */
@media (min-width: 769px) {
  .home {
    align-items: center;
  }

  .home .container {
    margin-top: 0;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .input-group {
    flex-direction: row;
  }
}
</style>
