# 🍳 Recipe Lab

Full-stack multilingual web application to generate recipes with artificial intelligence based on the ingredients you have in your pantry or fridge. Built with Vue 3, TypeScript, Express, and Groq's API with Llama 3.3-70b.

## 🌟 Features

- 🤖 **AI Recipe Generation** - Uses Groq's Llama 3.3-70b-versatile
- 🌍 **Multilingual (i18n)** - Catalan, Spanish, and English with dynamic language switching
- 🎨 **Mobile-first** - Responsive design with modern CSS
- 📱 **Semantic HTML5** - Accessible structure and SEO optimized
- ♿ **Accessible** - ARIA labels, keyboard navigation
- 🥬 **Warm veggie design** - Natural color palette
- ⚡ **Real-time** - Fast response with visual feedback (LoadingSpinner, ErrorMessage)
- 🎯 **Global design system** - CSS Variables and reusable components
- ✅ **TypeScript** - Full static typing in frontend and backend
- 🧪 **Comprehensive tests** - Vitest (unit) + Cypress (E2E)
- 🎭 **Component testing** - Vue component tests with @vue/test-utils

## 🏗️ Architecture

```
recipe-lab/
├── client/                 # Frontend Vue 3 + TypeScript
│   ├── src/
│   │   ├── assets/
│   │   │   └── styles/     # Global CSS (main.css, variables.css)
│   │   ├── components/     # Reusable components
│   │   │   ├── AppHeader.vue
│   │   │   ├── LanguageSelector.vue
│   │   │   ├── LoadingSpinner.vue
│   │   │   ├── ErrorMessage.vue
│   │   │   └── __tests__/  # Component unit tests
│   │   ├── locales/        # i18n translations
│   │   │   ├── ca.json
│   │   │   ├── es.json
│   │   │   └── en.json
│   │   ├── services/       # API calls
│   │   │   ├── api.ts
│   │   │   └── __tests__/
│   │   ├── stores/         # Pinia stores
│   │   │   ├── recipe.ts
│   │   │   └── __tests__/
│   │   ├── views/          # Pages
│   │   │   ├── HomeView.vue
│   │   │   └── RecipeView.vue
│   │   ├── router/         # Vue Router
│   │   ├── i18n.ts         # vue-i18n configuration
│   │   └── types/          # TypeScript types
│   ├── cypress/
│   │   └── e2e/            # E2E tests
│   │       ├── home.cy.ts
│   │       ├── recipe.cy.ts
│   │       ├── recipeView.cy.ts
│   │       ├── navigation.cy.ts
│   │       ├── accessibility.cy.ts
│   │       └── responsive.cy.ts
│   └── package.json
│
└── server/                 # Backend Express + TypeScript
    ├── src/
    │   ├── routes/         # API endpoints
    │   │   └── recipe.ts
    │   ├── services/       # Business logic
    │   │   └── aiService.ts
    │   ├── types/          # Shared TypeScript types
    │   ├── i18n.ts         # i18next configuration
    │   └── __tests__/      # Jest tests
    ├── locales/            # Backend translations
    │   ├── ca/translation.json
    │   ├── es/translation.json
    │   └── en/translation.json
    └── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js v20.19.0 or higher
- npm or yarn
- Groq API Key ([get it here](https://console.groq.com))

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/GeorginaTS/recipe-lab.git
cd recipe-lab
```

2. **Setup the server**

```bash
cd server
npm install

# Create .env file
echo "PORT=3000" > .env
echo "GROQ_API_KEY=your_api_key" >> .env
```

3. **Setup the client**

```bash
cd ../client
npm install

# Create .env file (optional)
echo "VITE_API_URL=http://localhost:3000" > .env
```

### Running in Development

**Terminal 1 - Server:**

```bash
cd server
npm run dev
```

**Terminal 2 - Client:**

```bash
cd client
npm run dev
```

Open your browser at `http://localhost:5173` 🎉

## 📖 Usage

1. **Select language** - Click on the flags (🇦🇩 CA / 🇪🇸 ES / 🇬🇧 EN) in the top bar
2. **Enter ingredients** - Add the ingredients you have available
3. **Generate recipe** - Click the button and wait a few seconds
4. **Enjoy** - Check the recipe with ingredients, steps, and variants!

The recipe will be generated in the selected language thanks to frontend-backend synchronization via `Accept-Language` header.

## 🧪 Tests

### Backend (Jest + Supertest)

```bash
cd server
npm test                    # Run all tests
npm run test:watch          # Watch mode
npm run test:coverage       # With coverage
```

Available tests:

- ✅ API endpoints (`recipe.test.ts`)
- ✅ AI Service (`aiService.test.ts`)

### Frontend - Unit Tests (Vitest)

```bash
cd client
npm run test:unit          # Unit tests
npm run test:unit:ui       # Vitest UI
```

Available tests:

- ✅ LoadingSpinner component
- ✅ ErrorMessage component
- ✅ Recipe store (Pinia)
- ✅ API service

### Frontend - E2E Tests (Cypress)

```bash
cd client
npm run test:e2e           # E2E tests (headless)
npm run test:e2e:dev       # E2E tests with UI
```

Available tests (34+ tests):

- ✅ Home page (9 tests)
- ✅ Recipe generation (3 tests)
- ✅ Recipe view (6 tests)
- ✅ Navigation (3 tests)
- ✅ Accessibility (5 tests)
- ✅ Responsive design (11 tests)

## 🏗️ Production Build

### Backend

```bash
cd server
npm run build              # Compile TypeScript → dist/
npm start                  # Run from dist/
```

### Frontend

```bash
cd client
npm run build              # Generate optimized dist/
npm run preview            # Preview the build
```

## 🎨 Tech Stack

### Frontend

- **Framework**: Vue 3.5.25 (Composition API + `<script setup>`)
- **Build tool**: Vite 7.2.7
- **Language**: TypeScript 5.7
- **Routing**: Vue Router 4.6.3
- **State**: Pinia 3.0.4
- **i18n**: vue-i18n 10.0.8
- **Testing**: Vitest 4.0.14 + Cypress 15.7.1
- **CSS**: Mobile-first, CSS Variables, Semantic HTML5

### Backend

- **Runtime**: Node.js 20.19.0
- **Framework**: Express 5.2.1
- **Language**: TypeScript 5.7
- **AI**: Groq SDK 0.37.0 (Llama 3.3-70b-versatile)
- **i18n**: i18next 25.7.2 + i18next-http-middleware 3.9.0
- **Testing**: Jest 30.0.0 + Supertest 7.0.0
- **Dev**: ts-node 10.9.2 + nodemon 3.1.11

## 🌍 Internationalization (i18n)

The application supports 3 languages with complete frontend-backend synchronization:

### Frontend (vue-i18n)

- Automatic browser language detection
- Preference persistence in `localStorage`
- Dynamic switching without page reload
- `LanguageSelector` component with flags

### Backend (i18next)

- Detection via `Accept-Language` header
- AI prompts adapted per language
- Recipes generated in selected language

### Supported Languages

- 🇦🇩 **Catalan** (ca) - Default language
- 🇪🇸 **Spanish** (es)
- 🇬🇧 **English** (en)

## 🎯 CSS Variables

Design system based on CSS Variables (`variables.css`):

```css
/* Main colors */
--primary-green: #7cb342
--secondary-orange: #ff9800

/* Background colors */
--bg-primary: #fffef7
--bg-secondary: #f5f3eb
--bg-card: #ffffff

/* Text colors */
--text-primary: #2e3c2a
--text-secondary: #5a6c57

/* Spacing */
--spacing-xs/sm/md/lg/xl/2xl

/* Shadows */
--shadow-sm/md/lg

/* Transitions */
--transition-fast/normal/slow
```

## 📁 Additional Documentation

- [Client README](./client/README.md)
- [Server README](./server/README.md)

## 🌍 Environment Variables

### Server (`.env`)

```env
PORT=3000
GROQ_API_KEY=your_groq_api_key
```

### Client (`.env` - optional)

```env
VITE_API_URL=http://localhost:3000
```

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Make sure tests pass (`npm test`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**GeorginaTS**

- GitHub: [@GeorginaTS](https://github.com/GeorginaTS)

## 🙏 Acknowledgments

- [Groq](https://groq.com) for the ultra-fast AI API
- [Vue.js](https://vuejs.org) for the excellent framework
- [Llama 3.3](https://www.llama.com/) for the AI model
- Open source community

---

Made with 💚 by food and technology lovers
