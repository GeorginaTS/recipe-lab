import express from "express";
import { generateRecipe } from "../services/aiService.ts";

const router = express.Router();

router.post("/", async (req, res) => {
  const { ingredients } = req.body;
  console.log("Ingredients rebuts:", ingredients);
  
  if (!ingredients || !Array.isArray(ingredients))
    return res.status(400).json({ error: "Ingredients no vàlids" });

  try {
    const recipe = await generateRecipe(ingredients);
    console.log("Recepta generada:", recipe);
    res.json(recipe);
  } catch (err) {
    console.error("Error detallat:", err);
    res.status(500).json({ 
      error: "Error generant recepta",
      details: err instanceof Error ? err.message : String(err)
    });
  }
});

export default router;
