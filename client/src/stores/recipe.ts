import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { RecipeResponse } from '@/types/recipe';
import { generateRecipe as generateRecipeAPI } from '@/services/api';

export const useRecipeStore = defineStore('recipe', () => {
  const recipe = ref<RecipeResponse | null>(null);
  const loading = ref(false);
  const error = ref('');

  async function fetchRecipe(ingredients: string[]) {
    loading.value = true;
    error.value = '';

    try {
      const result = await generateRecipeAPI(ingredients);
      recipe.value = result;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Error desconegut';
      throw err;
    } finally {
      loading.value = false;
    }
  }

  function clearRecipe() {
    recipe.value = null;
    error.value = '';
  }

  return { recipe, loading, error, fetchRecipe, clearRecipe };
});
