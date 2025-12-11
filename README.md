# 🍳 Recipe Lab

Full-stack multilingual web application that generates personalized recipes using AI based on available ingredients. Built with Vue 3, TypeScript, Express, Firebase, and Groq's Llama 3.3-70b.

## 👉 [Live demo](https://recipelab-859ee.web.app/)

## 🌟 Features

- 🤖 **AI Recipe Generation** - Powered by Groq's Llama 3.3-70b-versatile
- 🌍 **Multilingual (i18n)** - Catalan, Spanish, and English with dynamic switching
- 🎨 **Modern Design** - Mobile-first, cards, animations, gradient backgrounds with patterns
- 📱 **Semantic & Accessible** - HTML5, ARIA labels, keyboard navigation
- 🥬 **Natural Palette** - Warm veggie-inspired colors
- ⚡ **Real-time Feedback** - Loading states, error handling, empty states
- 🎯 **Design System** - CSS Variables, reusable components
- ☁️ **Firebase Hosting** - Functions + Hosting deployment
- ✅ **Full TypeScript** - Frontend and backend
- 🧪 **Comprehensive Testing** - Vitest (unit) + Cypress (E2E) + Jest (backend)

## 🏗️ Architecture

```text
recipe-lab/
├── client/                    # Vue 3 + TypeScript frontend
│   ├── src/
│   │   ├── assets/styles/    # main.css, variables.css, mediaqueries.css
│   │   ├── components/       # AppHeader, LanguageSelector, LoadingSpinner, 
│   │   │                     # ErrorMessage, IngredientsList, VariantsList
│   │   ├── locales/          # ca.json, es.json, en.json
│   │   ├── stores/           # Pinia (recipe.ts)
│   │   ├── views/            # HomeView.vue, RecipeView.vue
│   │   └── router/           # Vue Router
│   └── cypress/e2e/          # E2E tests (34+ tests)
│
└── server/                    # Express + TypeScript backend
    ├── src/
    │   ├── routes/           # recipe.ts
    │   ├── services/         # aiService.ts
    │   ├── app.ts            # Express app
    │   └── functions.ts      # Firebase Functions entry point
    ├── locales/              # Backend i18n
    └── __tests__/            # Jest tests
```

## 🚀 Quick Start

### Prerequisites

- Node.js v20.19.0+
- Groq API Key ([get it here](https://console.groq.com))
- Firebase CLI (optional, for deployment)

### Installation

```bash
git clone https://github.com/GeorginaTS/recipe-lab.git
cd recipe-lab

# Server setup
cd server
npm install
echo "GROQ_API_KEY=your_api_key" > .env

# Client setup
cd ../client
npm install
echo "VITE_API_URL=http://localhost:3000" > .env
```

### Development

```bash
# Terminal 1 - Server
cd server && npm run dev

# Terminal 2 - Client
cd client && npm run dev
```

Open `http://localhost:5173` 🎉

## 📖 Usage

1. **Select language** - Click flags (CA / ES / EN)
2. **Add ingredients** - Type and add your available ingredients
3. **Generate recipe** - Click the button and wait
4. **Enjoy** - View recipe with ingredients, steps, and variants

## 🧪 Testing

```bash
# Backend (Jest)
cd server && npm test

# Frontend Unit (Vitest)
cd client && npm run test:unit

# Frontend E2E (Cypress)
cd client && npm run test:e2e:dev
```

## 🚢 Firebase Deployment

### Backend (Functions)

```bash
cd server
npm run build
npm run deploy
```

### Frontend (Hosting)

```bash
cd client
npm run build

# From project root
firebase deploy --only hosting
```


## 🎨 Tech Stack

**Frontend:** Vue 3.5, Vite 7.2, TypeScript 5.7, Vue Router 4.6, Pinia 3.0, vue-i18n 10.0  
**Backend:** Node.js 20.19, Express 5.2, TypeScript 5.7, Groq SDK 0.37, Firebase Functions 7.0  
**Testing:** Vitest 4.0, Cypress 15.7, Jest 30.0  
**Deployment:** Firebase Hosting + Functions

## 🌍 Internationalization

Complete frontend-backend i18n synchronization:

- **Frontend (vue-i18n)**: Automatic detection, localStorage persistence, dynamic switching
- **Backend (i18next)**: `Accept-Language` header detection, localized AI prompts
- **Languages**: 🇦🇩 Catalan (default), 🇪🇸 Spanish, 🇬🇧 English

## 🎯 Design System

CSS Variables for consistency:

```css
--primary-green: #7cb342
--secondary-orange: #ff9800
--bg-primary: #fffef7
--text-primary: #2e3c2a
--spacing-xs/sm/md/lg/xl/2xl/3xl
--shadow-sm/md/lg
--transition-fast/normal/slow
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Run tests (`npm test`)
4. Commit changes (`git commit -m 'Add amazing feature'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 👤 Author

**GeorginaTS** - [@GeorginaTS](https://github.com/GeorginaTS)

## 🙏 Acknowledgments

- [Groq](https://groq.com) - Ultra-fast AI API
- [Vue.js](https://vuejs.org) - Progressive framework
- [Firebase](https://firebase.google.com) - Hosting & Functions
- [Llama 3.3](https://www.llama.com/) - AI model

---

Made with 💚 by food and technology lovers
