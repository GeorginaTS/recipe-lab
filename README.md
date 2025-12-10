# 🍳 Recipe Lab

Aplicació web full-stack per generar receptes amb intel·ligència artificial basant-se en els ingredients que tens aL rebost o a la nevera. Utilitza Vue 3, TypeScript, Express i l'API de Groq amb Llama 3.3.

## 🌟 Característiques

- 🤖 **Generació de receptes amb IA** - Utilitza Llama 3.3 de Groq
- 🥬 **Disseny veggie càlid** - Interfície amigable amb colors naturals
- ⚡ **Temps real** - Resposta ràpida amb feedback visual
- 📱 **Responsive** - Funciona en qualsevol dispositiu
- 🎨 **Sistema de disseny** - Components coherents i reutilitzables
- ✅ **TypeScript** - Tipat estàtic en frontend i backend
- 🧪 **Tests** - Cobertura de tests unitaris i E2E

## 🏗️ Arquitectura

```
recipe-lab/
├── client/          # Frontend Vue 3 + TypeScript
│   ├── src/
│   │   ├── assets/      # CSS globals
│   │   ├── services/    # API calls
│   │   ├── stores/      # Pinia stores
│   │   ├── views/       # Pàgines
│   │   └── router/      # Configuració routing
│   └── package.json
│
└── server/          # Backend Express + TypeScript
    ├── src/
    │   ├── routes/      # Endpoints API
    │   ├── services/    # Lògica de negoci
    │   ├── types/       # Tipus compartits
    │   └── __tests__/   # Tests
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

# Crea l'arxiu .env
echo "VITE_API_URL=http://localhost:3000" > .env
```

### Execució

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

1. Introdueix els ingredients que tens a la nevera
2. Clica "Genera recepta"
3. Espera uns segons mentre la IA crea la recepta
4. Gaudeix de la recepta generada amb ingredients, passos i variants!

## 🧪 Tests

### Backend
```bash
cd server
npm test                    # Executar tots els tests
npm run test:watch          # Mode watch
npm run test:coverage       # Amb cobertura
```

### Frontend
```bash
cd client
npm run test:unit          # Tests unitaris
npm run test:e2e           # Tests E2E
npm run test:e2e:dev       # Tests E2E en mode dev
```

## 🏗️ Build per producció

### Backend
```bash
cd server
npm run build
npm start
```

### Frontend
```bash
cd client
npm run build
npm run preview
```

## 🎨 Stack tecnològic

### Frontend
- Vue 3
- TypeScript
- Vite
- Vue Router
- Pinia
- Vitest + Cypress

### Backend
- Node.js
- Express
- TypeScript
- Groq SDK (Llama 3.3)
- Jest + Supertest
- dotenv

## 📁 Documentació

- [README del Client](./client/README.md)
- [README del Server](./server/README.md)

## 🌍 Variables d'entorn

### Server (`.env`)
```env
PORT=3000
GROQ_API_KEY=la_teva_clau_api_de_groq
```

### Client (`.env`)
```env
VITE_API_URL=http://localhost:3000
```

## 🤝 Contribuir

Les contribucions són benvingudes! Si us plau:

1. Fes fork del projecte
2. Crea una branca per la teva feature (`git checkout -b feature/amazing-feature`)
3. Commit els teus canvis (`git commit -m 'Add amazing feature'`)
4. Push a la branca (`git push origin feature/amazing-feature`)
5. Obre un Pull Request

## 📝 Llicència

Aquest projecte és de codi obert i està disponible sota la llicència MIT.

## 👤 Autor

**GeorginaTS**
- GitHub: [@GeorginaTS](https://github.com/GeorginaTS)

## 🙏 Agraïments

- [Groq](https://groq.com) per l'API d'IA
- [Vue.js](https://vuejs.org) per l'excel·lent framework
- Comunitat open source

---

Fet amb 💚 per amants de la cuina i la tecnologia
