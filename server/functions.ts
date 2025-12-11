import * as functions from "firebase-functions";
import app from "./src/app.js";

// Exporta l'app Express com a Cloud Function
export const api = functions.https.onRequest(app);
