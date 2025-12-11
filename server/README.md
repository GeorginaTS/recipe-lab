# Recipe Lab - Server

Backend server for the Recipe Lab app. Provides AI-powered recipe generation via REST API using Groq and Llama 3.3-70b.

## ✨ Features

- REST API for recipe generation
- TypeScript-first codebase
- Express web framework
- Groq Llama 3.3-70b AI integration
- Environment-based configuration
- Unit and integration tests (Jest, Supertest)

## 🚀 Technologies

- **Node.js** with **TypeScript**
- **Express** - Web framework
- **Groq SDK** - AI API
- **Jest** and **Supertest** - Testing
- **Nodemon** - Development with auto-reload
- **dotenv** - Environment variable management

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Groq API Key ([get it here](https://console.groq.com))

## 🔧 Installation

1. Go to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` root:
   ```env
   PORT=3000
   GROQ_API_KEY=your_api_key_here
   ```

## 🏃 Running

- Development mode:
  ```bash
  npm run dev
  ```
  Runs at `http://localhost:3000` with auto-reload.
- Production mode:
  ```bash
  npm run build
  npm start
  ```

## 🧪 Testing

- Run all tests:
  ```bash
  npm test
  ```
- Watch mode:
  ```bash
  npm run test:watch
  ```
- Coverage report:
  ```bash
  npm run test:coverage
  ```

## 📚 API Endpoints

### POST `/api/recipe`

- **Request Body:**
  ```json
  {
    "ingredients": ["chicken", "rice", "onion"]
  }
  ```
- **Response:**
  ```json
  {
    "title": "Chicken with rice and onion",
    "description": "A classic and simple dish...",
    "ingredients": [
      { "name": "Chicken", "quantity": "500g", "unit": "grams" }
    ],
    "steps": [
      { "num": 1, "description": "Clean the chicken..." }
    ],
    "time": "30-40 minutes",
    "difficulty": "easy",
    "variants": [
      { "name": "With vegetables", "description": "Add other vegetables..." }
    ]
  }
  ```

## 📁 Project structure

```
server/
├── src/
│   ├── __tests__/          # Tests
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   └── types/              # Type definitions
├── index.ts                # Entry point
├── package.json
├── tsconfig.json
├── jest.config.js
└── .env                    # Environment variables (not committed)
```

## 🔒 Environment variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `GROQ_API_KEY` | Groq API key | `gsk_...` |

## 🛠️ Available scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start server in development mode |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run compiled server |
| `npm test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate coverage report |

## 🤖 AI Model

The server uses the **llama-3.3-70b-versatile** model from Groq to generate recipes.

## 📝 Notes

- TypeScript imports use `.ts` extensions for ESM compatibility
- `tsconfig.json` includes `allowImportingTsExtensions` and `noEmit`
- The server uses `dotenv` to load environment variables before any import
