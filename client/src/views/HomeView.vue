<template>
  <main>
    <header>
      <h2>{{ t('home.subtitle') }}</h2>
      <p>{{ t('home.description') }}</p>
    </header>

    <section class="card">
      <h3>🥘 {{ t('home.addButton') }}</h3>
      <form @submit.prevent="addIngredient">
        <div class="input-group">
          <span class="input-icon">🥬</span>
          <input
            id="ingredient-input"
            v-model="newIngredient"
            type="text"
            :placeholder="t('home.ingredientsPlaceholder')"
          />
          <button type="submit" class="btn-secondary">
            + {{ t('home.addButton') }}
          </button>
        </div>
      </form>
    </section>

    <section v-if="ingredients.length > 0" class="card ingredients-card" :aria-label="t('home.ingredientsTitle')">
      <h3>✓ {{ t('home.ingredientsTitle') }}</h3>
      <ul>
        <li v-for="(ingredient, index) in ingredients" :key="index" class="chip">
          <span>{{ ingredient }}</span>
          <button
            @click="removeIngredient(index)"
            :aria-label="`${t('common.close')} ${ingredient}`"
            type="button"
          >
            ×
          </button>
        </li>
      </ul>
      <button
        @click="generateRecipe"
        :disabled="loading"
        type="button"
        class="btn-primary"
      >
        {{ loading ? '⏳ ' + t('home.generating') : '✨ ' + t('home.generateButton') }}
      </button>
    </section>

    <div v-else class="empty-state">
      <span class="empty-icon">🍳</span>
      <p>{{ t('home.emptyState') }}</p>
    </div>

    <aside v-if="error" role="alert">
      {{ error }}
    </aside>
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


