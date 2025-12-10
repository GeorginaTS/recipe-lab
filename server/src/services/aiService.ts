import Groq from "groq-sdk";
import type { Recipe } from "../types/recipe.ts";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const PROMPTS = {
  ca: `Ets un xef expert. Genera una recepta completa EN CATALÀ en format JSON amb aquesta estructura:
{
  "titol": "nom de la recepta en català",
  "descripcio": "descripció breu en català",
  "ingredients": [{"nom": "ingredient en català", "quantitat": "100", "unitat": "g"}],
  "passos": ["pas 1 en català", "pas 2 en català"],
  "temps": "30 minuts",
  "dificultat": "Fàcil",
  "variants": [{"nom": "nom variant en català", "descripcio": "descripció en català"}]
}
IMPORTANT: Tot el contingut ha d'estar escrit en CATALÀ.
Ingredients disponibles: {{ingredients}}`,
  es: `Eres un chef experto. Genera una receta completa EN ESPAÑOL en formato JSON con esta estructura:
{
  "titol": "nombre de la receta en español",
  "descripcio": "descripción breve en español",
  "ingredients": [{"nom": "ingrediente en español", "quantitat": "100", "unitat": "g"}],
  "passos": ["paso 1 en español", "paso 2 en español"],
  "temps": "30 minutos",
  "dificultat": "Fácil",
  "variants": [{"nom": "nombre variante en español", "descripcio": "descripción en español"}]
}
IMPORTANTE: Todo el contenido debe estar escrito en ESPAÑOL (castellano).
Ingredientes disponibles: {{ingredients}}`,
  en: `You are an expert chef. Generate a complete recipe IN ENGLISH in JSON format with this structure:
{
  "titol": "recipe name in English",
  "descripcio": "brief description in English",
  "ingredients": [{"nom": "ingredient in English", "quantitat": "100", "unitat": "g"}],
  "passos": ["step 1 in English", "step 2 in English"],
  "temps": "30 minutes",
  "dificultat": "Easy",
  "variants": [{"nom": "variant name in English", "descripcio": "description in English"}]
}
IMPORTANT: All content must be written in ENGLISH.
Available ingredients: {{ingredients}}`
};

export async function generateRecipe(ingredients: string[], locale: string = 'ca'): Promise<Recipe | { raw: string }> {
  const promptTemplate = PROMPTS[locale as keyof typeof PROMPTS] || PROMPTS.ca;
  const prompt = promptTemplate.replace('{{ingredients}}', ingredients.join(", "));

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7
  });

  let output: string | null = response.choices[0]?.message?.content ?? null;

  if (!output) {
    return { raw: "No s'ha rebut resposta" };
  }

  // Treu Markdown i parseja JSON
  const match = output.match(/```(?:json)?\s*\n([\s\S]*?)\n```/);
  if (match && match[1]) {
    output = match[1];
  }

  try {
    return JSON.parse(output) as Recipe;
  } catch (error) {
    console.error("Error parseant JSON:", error);
    console.error("Output rebut:", output);
    return { raw: output };
  }
}
