<template>
  <main>
    <HomeHero :subtitle="t('home.subtitle')" :description="t('home.description')" />

    <IngredientForm v-model="newIngredient" @add="addIngredient" />

    <section v-if="ingredients.length > 0" class="card ingredients-card" :aria-label="t('home.ingredientsTitle')">
      <h3>✓ {{ t('home.ingredientsTitle') }}</h3>
      <ChipsList :ingredients="ingredients" @remove="removeIngredient" />
      <div class="generate-button-wrapper">
        <button
          @click="generateRecipe"
          :disabled="loading"
          type="button"
          class="btn-primary btn-generate"
        >
          {{ loading ? '⏳ ' + t('home.generating') : '✨ ' + t('home.generateButton') }}
        </button>
      </div>
    </section>

    <section v-else class="empty-state">
      <span class="empty-icon">🍳</span>
      <p>{{ t('home.emptyState') }}</p>
    </section>

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
import HomeHero from '@/components/HomeHero.vue';
import IngredientForm from '@/components/IngredientForm.vue';
import ChipsList from '@/components/ChipsList.vue';

const router = useRouter();
const recipeStore = useRecipeStore();
const { t } = useI18n();

const newIngredient = ref('');
const ingredients = ref<string[]>([]);
const loading = ref(false);
const error = ref('');

const addIngredient = (ingredient: string) => {
  if (ingredient && !ingredients.value.includes(ingredient)) {
    ingredients.value.push(ingredient);
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
.generate-button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-xl);
}

.btn-generate {
  font-size: 1.1rem;
  padding: var(--spacing-md) var(--spacing-2xl);
  min-width: 250px;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(124, 179, 66, 0.3);
  transition: all 0.3s ease;
}

.btn-generate:hover:not(:disabled) {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 6px 16px rgba(124, 179, 66, 0.4);
}

.btn-generate:active:not(:disabled) {
  transform: translateY(-1px) scale(1);
  box-shadow: 0 3px 8px rgba(124, 179, 66, 0.3);
}
</style>

