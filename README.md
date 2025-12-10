# 🍳 Recipe Lab

Aplicació web full-stack multiidioma per generar receptes amb intel·ligència artificial basant-se en els ingredients que tens al rebost o a la nevera. Utilitza Vue 3, TypeScript, Express i l'API de Groq amb Llama 3.3-70b.

## 🌟 Característiques

- 🤖 **Generació de receptes amb IA** - Utilitza Llama 3.3-70b-versatile de Groq
- 🌍 **Multiidioma (i18n)** - Català, Español i English amb canvi dinàmic
- 🎨 **Mobile-first** - Disseny responsive amb CSS modern
- 📱 **Semàntic HTML5** - Estructura accessible i optimitzada SEO
- ♿ **Accessible** - ARIA labels, navegació per teclat
- 🥬 **Disseny veggie càlid** - Paleta de colors naturals
- ⚡ **Temps real** - Resposta ràpida amb feedback visual (LoadingSpinner, ErrorMessage)
- 🎯 **Sistema de disseny global** - CSS Variables i components reutilitzables
- ✅ **TypeScript** - Tipat estàtic complet en frontend i backend
- 🧪 **Tests complets** - Vitest (unit) + Cypress (E2E)
- 🎭 **Component testing** - Tests de components Vue amb @vue/test-utils

## 🏗️ Arquitectura

```
recipe-lab/
├── client/                 # Frontend Vue 3 + TypeScript
│   ├── src/
│   │   ├── assets/
│   │   │   └── styles/     # CSS globals (main.css, variables.css)
│   │   ├── components/     # Components reutilitzables
│   │   │   ├── AppHeader.vue
│   │   │   ├── LanguageSelector.vue
│   │   │   ├── LoadingSpinner.vue
│   │   │   ├── ErrorMessage.vue
│   │   │   └── __tests__/  # Tests unitaris components
│   │   ├── locales/        # Traduccions i18n
│   │   │   ├── ca.json
│   │   │   ├── es.json
│   │   │   └── en.json
│   │   ├── services/       # API calls
│   │   │   ├── api.ts
│   │   │   └── __tests__/
│   │   ├── stores/         # Pinia stores
│   │   │   ├── recipe.ts
│   │   │   └── __tests__/
│   │   ├── views/          # Pàgines
│   │   │   ├── HomeView.vue
│   │   │   └── RecipeView.vue
│   │   ├── router/         # Vue Router
│   │   ├── i18n.ts         # Configuració vue-i18n
│   │   └── types/          # TypeScript types
│   ├── cypress/
│   │   └── e2e/            # Tests E2E
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
    │   ├── services/       # Lògica de negoci
    │   │   └── aiService.ts
    │   ├── types/          # TypeScript types compartits
    │   ├── i18n.ts         # Configuració i18next
    │   └── __tests__/      # Tests Jest
    ├── locales/            # Traduccions backend
    │   ├── ca/translation.json
    │   ├── es/translation.json
    │   └── en/translation.json
    └── package.json
```

## 🚀 Inici ràpid

### Prerequisits

- Node.js v20.19.0 o superior
- npm o yarn
- Clau API de Groq ([obtenir aquí](https://console.groq.com))

### Instal·lació

1. **Clona el repositori**
```bash
git clone https://github.com/GeorginaTS/recipe-lab.git
cd recipe-lab
```

2. **Configura el servidor**
```bash
cd server
npm install

# Crea l'arxiu .env
echo "PORT=3000" > .env
echo "GROQ_API_KEY=la_teva_clau_api" >> .env
```

3. **Configura el client**
```bash
cd ../client
npm install

# Crea l'arxiu .env (opcional)
echo "VITE_API_URL=http://localhost:3000" > .env
```

### Execució en desenvolupament

**Terminal 1 - Servidor:**
```bash
cd server
npm run dev
```

**Terminal 2 - Client:**
```bash
cd client
npm run dev
```

Obre el navegador a `http://localhost:5173` 🎉

## 📖 Ús

1. **Selecciona l'idioma** - Clica a les banderes (🇦🇩 CA / 🇪🇸 ES / 🇬🇧 EN) a la barra superior
2. **Introdueix ingredients** - Afegeix els ingredients que tens disponibles
3. **Genera recepta** - Clica el botó i espera uns segons
4. **Gaudeix** - Consulta la recepta amb ingredients, passos i variants!

La recepta es generarà en l'idioma seleccionat gràcies a la sincronització frontend-backend via `Accept-Language` header.

## 🧪 Tests

### Backend (Jest + Supertest)
```bash
cd server
npm test                    # Executar tots els tests
npm run test:watch          # Mode watch
npm run test:coverage       # Amb cobertura
```

Tests disponibles:
- ✅ API endpoints (`recipe.test.ts`)
- ✅ AI Service (`aiService.test.ts`)

### Frontend - Tests Unitaris (Vitest)
```bash
cd client
npm run test:unit          # Tests unitaris
npm run test:unit:ui       # UI de Vitest
```

Tests disponibles:
- ✅ LoadingSpinner component
- ✅ ErrorMessage component
- ✅ Recipe store (Pinia)
- ✅ API service

### Frontend - Tests E2E (Cypress)
```bash
cd client
npm run test:e2e           # Tests E2E (headless)
npm run test:e2e:dev       # Tests E2E amb UI
```

Tests disponibles (34+ tests):
- ✅ Home page (9 tests)
- ✅ Recipe generation (3 tests)
- ✅ Recipe view (6 tests)
- ✅ Navigation (3 tests)
- ✅ Accessibility (5 tests)
- ✅ Responsive design (11 tests)

## 🏗️ Build per producció

### Backend
```bash
cd server
npm run build              # Compila TypeScript → dist/
npm start                  # Executa des de dist/
```

### Frontend
```bash
cd client
npm run build              # Genera dist/ optimitzat
npm run preview            # Preview del build
```

## 🎨 Stack tecnològic

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

## 🌍 Internacionalització (i18n)

L'aplicació suporta 3 idiomes amb sincronització completa frontend-backend:

### Frontend (vue-i18n)
- Detecció automàtica de l'idioma del navegador
- Persistència de la preferència en `localStorage`
- Canvi dinàmic sense recarregar la pàgina
- Component `LanguageSelector` amb banderes

### Backend (i18next)
- Detecció via `Accept-Language` header
- Prompts de IA adaptats per idioma
- Receptes generades en l'idioma seleccionat

### Idiomes suportats
- 🇦🇩 **Català** (ca) - Idioma per defecte
- 🇪🇸 **Español** (es)
- 🇬🇧 **English** (en)

## 🎯 Variables CSS

Sistema de disseny basat en CSS Variables (`variables.css`):

```css
/* Colors principals */
--primary-green: #7cb342
--secondary-orange: #ff9800

/* Colors de fons */
--bg-primary: #fffef7
--bg-secondary: #f5f3eb
--bg-card: #ffffff

/* Colors de text */
--text-primary: #2e3c2a
--text-secondary: #5a6c57

/* Spacing */
--spacing-xs/sm/md/lg/xl/2xl

/* Ombres */
--shadow-sm/md/lg

/* Transicions */
--transition-fast/normal/slow
```

## 📁 Documentació addicional

- [README del Client](./client/README.md)
- [README del Server](./server/README.md)

## 🌍 Variables d'entorn

### Server (`.env`)
```env
PORT=3000
GROQ_API_KEY=la_teva_clau_api_de_groq
```

### Client (`.env` - opcional)
```env
VITE_API_URL=http://localhost:3000
```

## 🤝 Contribuir

Les contribucions són benvingudes! Si us plau:

1. Fes fork del projecte
2. Crea una branca per la teva feature (`git checkout -b feature/amazing-feature`)
3. Commit els teus canvis (`git commit -m 'Add amazing feature'`)
4. Assegura't que els tests passen (`npm test`)
5. Push a la branca (`git push origin feature/amazing-feature`)
6. Obre un Pull Request

## 📝 Llicència

Aquest projecte és de codi obert i està disponible sota la llicència MIT.

## 👤 Autor

**GeorginaTS**
- GitHub: [@GeorginaTS](https://github.com/GeorginaTS)

## 🙏 Agraïments

- [Groq](https://groq.com) per l'API d'IA ultraràpida
- [Vue.js](https://vuejs.org) per l'excel·lent framework
- [Llama 3.3](https://www.llama.com/) per el model d'IA
- Comunitat open source

---

Fet amb 💚 per amants de la cuina i la tecnologia
