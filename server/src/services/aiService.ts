import Groq from "groq-sdk";
import type { Recipe } from "../types/recipe.ts";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function generateRecipe(ingredients: string[]): Promise<Recipe | { raw: string }> {
  const prompt = `
Ets un xef expert. Genera una recepta completa en format JSON amb aquesta estructura:
{
  "titol": "",
  "descripcio": "",
  "ingredients": [],
  "passos": [],
  "temps": "",
  "dificultat": "",
  "variants": []
}
Ingredients: ${ingredients.join(", ")}
  `;

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
