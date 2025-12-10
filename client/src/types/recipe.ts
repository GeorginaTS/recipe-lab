export interface Recipe {
  titol: string;
  descripcio: string;
  ingredients: Array<{
    nom: string;
    quantitat: string;
    unitat?: string;
  }>;
  passos: Array<{
    num?: number;
    ordre?: number;
    pas?: number;
    descripcio: string;
  }> | string[];
  temps: string;
  dificultat: string;
  variants: Array<{
    nom: string;
    descripcio: string;
  }> | string[];
}

export interface RecipeResponse {
  raw?: string;
  titol?: string;
  descripcio?: string;
  ingredients?: any[];
  passos?: any[];
  temps?: string;
  dificultat?: string;
  variants?: any[];
}
