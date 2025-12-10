import request from 'supertest';
import express from 'express';
import recipeRouter from '../routes/recipe.js';

const app = express();
app.use(express.json());
app.use('/api/recipe', recipeRouter);

describe('POST /api/recipe', () => {
  it('hauria de retornar error 400 si no hi ha ingredients', async () => {
    const response = await request(app)
      .post('/api/recipe')
      .send({});

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'Ingredients no vàlids');
  });

  it('hauria de retornar error 400 si ingredients no és un array', async () => {
    const response = await request(app)
      .post('/api/recipe')
      .send({ ingredients: 'not an array' });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'Ingredients no vàlids');
  });

  it('hauria de retornar una recepta amb ingredients vàlids', async () => {
    const response = await request(app)
      .post('/api/recipe')
      .send({ ingredients: ['pollastre', 'arròs', 'ceba'] });

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    
    // Pot retornar una recepta vàlida o un objecte raw
    if ('titol' in response.body) {
      expect(response.body).toHaveProperty('titol');
      expect(response.body).toHaveProperty('ingredients');
      expect(response.body).toHaveProperty('passos');
    } else {
      expect(response.body).toHaveProperty('raw');
    }
  }, 30000); // timeout de 30s per la crida a l'API
});
