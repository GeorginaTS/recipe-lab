# Recipe Lab - Server

Servidor backend per a l'aplicació Recipe Lab. Utilitza TypeScript, Express i l'API de Groq per generar receptes amb IA.

## 🚀 Tecnologies

- **Node.js** amb **TypeScript**
- **Express** - Framework web
- **Groq SDK** - API d'intel·ligència artificial
- **Jest** i **Supertest** - Testing
- **Nodemon** - Desenvolupament amb recàrrega automàtica
- **dotenv** - Gestió de variables d'entorn

## 📋 Requisits previs

- Node.js (v18 o superior)
- npm o yarn
- Clau API de Groq (obtenir a [console.groq.com](https://console.groq.com))

## 🔧 Instal·lació

1. Navega al directori del servidor:
```bash
cd server
```

2. Instal·la les dependències:
```bash
npm install
```

3. Crea un arxiu `.env` a l'arrel del directori `server`:
```env
PORT=3000
GROQ_API_KEY=la_teva_clau_api_aqui
```

## 🏃 Execució

### Mode desenvolupament
```bash
npm run dev
```
El servidor s'executarà a `http://localhost:3000` amb recàrrega automàtica.

### Mode producció
```bash
npm run build
npm start
```

## 🧪 Testing

Executar tots els tests:
```bash
npm test
```

Executar tests en mode watch:
```bash
npm run test:watch
```

Generar informe de cobertura:
```bash
npm run test:coverage
```

## 📚 API Endpoints

### POST `/api/recipe`

Genera una recepta basada en una llista d'ingredients.

**Request Body:**
```json
{
  "ingredients": ["pollastre", "arròs", "ceba"]
}
```

**Response (200 OK):**
```json
{
  "titol": "Pollastre amb arròs i ceba",
  "descripcio": "Un plat clàssic i senzill...",
  "ingredients": [
    {
      "nom": "Pollastre",
      "quantitat": "500g",
      "unitat": "grams"
    }
  ],
  "passos": [
    {
      "num": 1,
      "descripcio": "Neteja el pollastre..."
    }
  ],
  "temps": "30-40 minuts",
  "dificultat": "fàcil",
  "variants": [
    {
      "nom": "Variant amb verdures",
      "descripcio": "Afegiu altres verdures..."
    }
  ]
}
```

**Errors:**
- `400 Bad Request` - Ingredients no vàlids o no proporcionats
- `500 Internal Server Error` - Error generant la recepta

## 📁 Estructura del projecte

```
server/
├── src/
│   ├── __tests__/          # Tests
│   │   ├── aiService.test.ts
│   │   └── recipe.test.ts
│   ├── routes/             # Rutes de l'API
│   │   └── recipe.ts
│   ├── services/           # Lògica de negoci
│   │   └── aiService.ts
│   └── types/              # Definicions de tipus
│       └── recipe.ts
├── index.ts                # Punt d'entrada
├── package.json
├── tsconfig.json
├── jest.config.js
└── .env                    # Variables d'entorn (no commitejat)
```

## 🔒 Variables d'entorn

| Variable | Descripció | Exemple |
|----------|------------|---------|
| `PORT` | Port del servidor | `3000` |
| `GROQ_API_KEY` | Clau API de Groq | `gsk_...` |

## 🛠️ Scripts disponibles

| Script | Descripció |
|--------|------------|
| `npm run dev` | Inicia el servidor en mode desenvolupament |
| `npm run build` | Compila TypeScript a JavaScript |
| `npm start` | Executa el servidor compilat |
| `npm test` | Executa els tests |
| `npm run test:watch` | Executa els tests en mode watch |
| `npm run test:coverage` | Genera informe de cobertura |

## 🤖 Model d'IA

El servidor utilitza el model **llama-3.3-70b-versatile** de Groq per generar les receptes.

## 📝 Notes

- Els imports TypeScript usen extensions `.ts` per compatibilitat amb ESM
- La configuració de `tsconfig.json` inclou `allowImportingTsExtensions` i `noEmit`
- El servidor usa `dotenv` per carregar les variables d'entorn abans de qualsevol import
