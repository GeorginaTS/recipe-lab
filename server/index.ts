import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import recipeRouter from "./src/routes/recipe.ts";
import { i18nMiddleware } from "./src/i18n.ts";

const app = express();
app.use(cors());
app.use(express.json());
app.use(i18nMiddleware);

app.use("/api/recipe", recipeRouter);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server funcionant al port ${process.env.PORT || 3000}`)
);
