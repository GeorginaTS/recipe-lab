import express from "express";
import cors from "cors";
import recipeRouter from "./routes/recipe.js";
import { i18nMiddleware } from "./i18n.js";

const app = express();

// Configuració CORS per Firebase Functions
app.use(cors({ origin: true }));
app.use(express.json());
app.use(i18nMiddleware);

// Rutes
app.use("/api/recipe", recipeRouter);

export default app;
