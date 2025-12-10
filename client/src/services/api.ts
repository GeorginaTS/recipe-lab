import type { Recipe, RecipeResponse } from '@/types/recipe';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function generateRecipe(ingredients: string[]): Promise<Recipe | RecipeResponse> {
  const locale = localStorage.getItem('locale') || 'ca';

  const response = await fetch(`${API_URL}/api/recipe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': locale,
    },
    body: JSON.stringify({ ingredients }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Error generant la recepta');
  }

  return response.json();
}
