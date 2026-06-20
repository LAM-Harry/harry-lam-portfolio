# harry-lam-portfolio

Portfolio de Hoang Anh Harry LAM — design dark "Player Stats meets Dev Portfolio".

## Stack
- React 18 + TypeScript
- Vite
- CSS Modules

## Installation

```bash
# 1. Cloner le repo
git clone https://github.com/LAM-Harry/harry-lam-portfolio.git
cd harry-lam-portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer en local
npm run dev
# → http://localhost:5173
```

## Déploiement sur Vercel

```bash
# Option 1 — Via CLI
npm i -g vercel
vercel --prod

# Option 2 — Via GitHub
# Push le repo sur GitHub, importe-le sur vercel.com
# Vercel détecte Vite automatiquement, aucune config nécessaire
```

## Structure

```
src/
  components/
    Hero.tsx          ← Nom, badge disponibilité, liens
    Hero.module.css
    StatsBar.tsx      ← 4 chiffres clés
    StatsBar.module.css
    Experience.tsx    ← Stage KAIST
    Experience.module.css
    Projects.tsx      ← 3 projets académiques
    Projects.module.css
    Skills.tsx        ← Stack technique avec barres animées
    Skills.module.css
    Formation.tsx     ← BUT + Bac
    Formation.module.css
    Footer.tsx        ← Langues, qualités, contacts
    Footer.module.css
  data/
    cv.ts             ← Toutes les données du CV (modifier ici)
  styles/
    globals.css       ← Variables CSS, dark theme, utilitaires
  App.tsx
  main.tsx
index.html
```

## Personnalisation

Toutes les données sont centralisées dans `src/data/cv.ts`.
Pour modifier le contenu, tu n'as qu'à éditer ce fichier.

Pour changer la couleur accent (vert néon par défaut) :
```css
/* src/styles/globals.css */
:root {
  --accent: #00ff87; /* Change cette valeur */
}
```
