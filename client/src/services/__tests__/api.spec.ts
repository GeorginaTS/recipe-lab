import { describe, it, expect, beforeEach, vi } from 'vitest';
import { generateRecipe } from '../api';

global.fetch = vi.fn();

describe('API Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('crida l\'API amb els ingredients correctes', async () => {
    const mockRecipe = {
      titol: 'Truita',
      descripcio: 'Truita francesa',
      ingredients: [{ nom: 'Ous', quantitat: '3' }],
      passos: ['Pas 1'],
      temps: '10 min',
      dificultat: 'Fàcil'
    };

    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: async () => mockRecipe
    } as Response);

    const ingredients = ['ous', 'sal'];
    const result = await generateRecipe(ingredients);

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/recipe'),
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients })
      })
    );

    expect(result).toEqual(mockRecipe);
  });

  it('llança error quan la resposta no és ok', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      statusText: 'Internal Server Error'
    } as Response);

    await expect(generateRecipe(['test'])).rejects.toThrow(
      'Error generant la recepta: Internal Server Error'
    );
  });

  it('llança error quan hi ha un problema de xarxa', async () => {
    vi.mocked(fetch).mockRejectedValue(new Error('Network error'));

    await expect(generateRecipe(['test'])).rejects.toThrow('Network error');
  });

  it('llança error si la llista d\'ingredients està buida', async () => {
    await expect(generateRecipe([])).rejects.toThrow(
      'Cal proporcionar almenys un ingredient'
    );
  });
});
