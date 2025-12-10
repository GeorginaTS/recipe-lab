import { generateRecipe } from '../services/aiService.js';

describe('generateRecipe', () => {
  it('hauria de generar una recepta amb ingredients vàlids', async () => {
    const ingredients = ['tomàquet', 'ceba', 'all'];
    const result = await generateRecipe(ingredients);

    expect(result).toBeDefined();
    
    // Comprova que retorna un objecte amb les propietats esperades
    if ('titol' in result) {
      expect(result.titol).toBeDefined();
      expect(result.ingredients).toBeDefined();
      expect(result.passos).toBeDefined();
    } else {
      // Si no pot parsejar el JSON, retorna raw
      expect(result.raw).toBeDefined();
    }
  }, 30000); // timeout de 30s per la crida a l'API

  it('hauria de gestionar ingredients buits', async () => {
    const ingredients: string[] = [];
    const result = await generateRecipe(ingredients);

    expect(result).toBeDefined();
  }, 30000);
});
