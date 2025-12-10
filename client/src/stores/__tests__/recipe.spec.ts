import { describe, it, expect, beforeEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useRecipeStore } from '../recipe';
import * as apiService from '@/services/api';

vi.mock('@/services/api');

describe('Recipe Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it('inicialitza amb estat buit', () => {
    const store = useRecipeStore();
    expect(store.recipe).toBeNull();
    expect(store.loading).toBe(false);
    expect(store.error).toBeNull();
  });

  it('fetchRecipe actualitza l\'estat correctament en èxit', async () => {
    const mockRecipe = {
      titol: 'Paella',
      descripcio: 'Recepta tradicional',
      ingredients: [{ nom: 'Arròs', quantitat: '400g' }],
      passos: ['Pas 1', 'Pas 2'],
      temps: '45 min',
      dificultat: 'Mitjana'
    };

    vi.mocked(apiService.generateRecipe).mockResolvedValue(mockRecipe);

    const store = useRecipeStore();
    await store.fetchRecipe(['arròs', 'pollastre']);

    expect(store.recipe).toEqual(mockRecipe);
    expect(store.loading).toBe(false);
    expect(store.error).toBeNull();
  });

  it('fetchRecipe gestiona els errors correctament', async () => {
    const errorMessage = 'Error de connexió';
    vi.mocked(apiService.generateRecipe).mockRejectedValue(new Error(errorMessage));

    const store = useRecipeStore();
    await expect(store.fetchRecipe(['arròs'])).rejects.toThrow(errorMessage);

    expect(store.recipe).toBeNull();
    expect(store.loading).toBe(false);
    expect(store.error).toBe(errorMessage);
  });

  it('estableix loading a true durant la crida a l\'API', async () => {
    let resolvePromise: (value: unknown) => void;
    const promise = new Promise((resolve) => {
      resolvePromise = resolve;
    });

    vi.mocked(apiService.generateRecipe).mockReturnValue(promise as Promise<never>);

    const store = useRecipeStore();
    const fetchPromise = store.fetchRecipe(['test']);

    expect(store.loading).toBe(true);

    resolvePromise!({ titol: 'Test' });
    await fetchPromise;

    expect(store.loading).toBe(false);
  });

  it('clearRecipe neteja l\'estat', () => {
    const store = useRecipeStore();
    store.recipe = { titol: 'Test' } as never;
    store.error = 'Error';

    store.clearRecipe();

    expect(store.recipe).toBeNull();
    expect(store.error).toBeNull();
  });
});
