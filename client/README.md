# Recipe Lab - Client

Frontend web application for Recipe Lab. User interface to generate AI-powered recipes based on available ingredients.

## ✨ Features

- Multilingual (Catalan, Spanish, English)
- Modern, responsive design
- Add, remove, and manage ingredients
- Instant AI recipe generation
- Installable as a PWA (desktop & mobile)
- Accessible and keyboard-friendly

## 🚀 Technologies

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Static typing
- **Vite** - Build tool and dev server
- **Vue Router** - Navigation
- **Pinia** - State management
- **CSS Variables** - Consistent design system

## 📋 Prerequisites

- Node.js (v20.19.0 or higher)
- npm or yarn

## 🔧 Installation

1. Go to the client directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## 📝 Usage

1. Select your language (CA / ES / EN)
2. Add ingredients by typing and clicking “Add ingredient”
3. Click “Generate recipe” and wait a few seconds
4. View the generated recipe, variants, and steps
5. Install the app as a PWA on your device (look for the install button in your browser)

## 💻 Development

- Start the dev server:

  ```bash
  npm run dev
  ```

- Build for production:

  ```bash
  npm run build
  ```

- Run unit tests:

  ```bash
  npm run test:unit
  ```

- Run end-to-end tests:

  ```bash
  npm run test:e2e:dev
  ```

## 📱 PWA (Progressive Web App)

- The app can be installed on desktop or mobile for offline use.
- Icons and screenshots are configured in `vite.config.ts` using the VitePWA plugin.
- To update icons/screenshots, place them in `public/` and update the manifest in the config.
- Rebuild and redeploy after changes.
