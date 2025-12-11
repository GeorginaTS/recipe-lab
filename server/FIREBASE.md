# Firebase Functions per RecipeLAB

## Configuració

1. Instal·la Firebase CLI globalment:
```bash
npm install -g firebase-tools
```

2. Inicia sessió a Firebase:
```bash
firebase login
```

3. Inicialitza el projecte Firebase (si encara no ho has fet):
```bash
firebase init
```

4. Configura les variables d'entorn a Firebase:
```bash
firebase functions:config:set groq.api_key="la-teva-clau-api"
```

## Desenvolupament local

Per executar les functions localment amb l'emulador:

```bash
cd server
npm run serve
```

Això iniciarà l'emulador de Firebase Functions al port 5001.

## Deploy a Firebase

Per desplegar les functions a producció:

```bash
cd server
npm run deploy
```

## Estructura

- `server/functions.ts` - Punt d'entrada per Firebase Functions
- `server/src/app.ts` - Configuració de l'aplicació Express
- `server/index.ts` - Servidor local per desenvolupament

## URLs

- **Local**: `http://localhost:5001/[PROJECT-ID]/us-central1/api`
- **Producció**: `https://us-central1-[PROJECT-ID].cloudfunctions.net/api`

## Notes

- Les variables d'entorn en producció es gestionen amb `firebase functions:config:set`
- En local, continua utilitzant el fitxer `.env`
- L'aplicació Express està separada a `app.ts` per facilitar testing i reutilització
