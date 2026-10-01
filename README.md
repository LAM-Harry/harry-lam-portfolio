# Hoang Anh Harry LAM | Portfolio d'études

Portfolio de mes années d'études - Hoang Anh Harry LAM.

## Installation

```bash
git clone https://github.com/LAM-Harry/harry-lam-portfolio.git
cd harry-lam-portfolio
npm install
npm run dev   # → http://localhost:5173
```

## Structure

Le projet est organisé autour de l’application principale, des sections du portfolio et des données partagées.

```text
src/
├── App.tsx                         # composition des routes et des sections
├── main.tsx                        # point d’entrée React/Vite
├── vite-env.d.ts                   # types Vite et imports de fichiers
├── i18n/
│   └── index.ts                    # configuration i18next
├── pages/
│   ├── index.ts                    # exports des sections publiques
│   ├── ui/
│   │   └── Section.tsx             # composant de section générique
│   ├── profil/
│   │   └── sections/
│   │       ├── Experience/
│   │       ├── Formation/
│   │       ├── Hero/
│   │       ├── Licenses/
│   │       ├── LQH/
│   │       ├── Methodologies/
│   │       ├── Projects/
│   │       ├── Skills/
│   │       ├── StatsBar/
│   │       └── Supports/
│   └── projects/
│       ├── Projects.tsx            # page globale des projets
│       ├── Projects.module.css
│       └── components/
│           ├── Card/
│           │   ├── ProjectCard.tsx
│           │   └── ProjectCard.module.css
│           └── Carrousel/
│               ├── ProjectCarousel.tsx
│               └── ProjectCarousel.module.css
└── shared/
    ├── assets/
    │   ├── logo/
    │   │   ├── certificate/
    │   │   ├── education/
    │   │   └── internship/
    │   └── projects/
    │       ├── game-of-life/
    │       ├── nn-project/
    │       └── olga/
    ├── data/
    │   ├── cv/cv.data.ts           # contenu principal du CV
    │   └── project/
    │       ├── index.ts
    │       └── project.data.ts
    ├── docs/
    │   ├── certificate/
    │   └── cv/
    ├── layout/
    │   ├── MainLayout.tsx
    │   └── MainLayout.module.css
    ├── locales/
    │   └── translation/
    │       ├── en.json
    │       └── fr.json
    ├── styles/
    │   └── globals.css
    └── types/
        ├── cv/cv.type.ts
        └── project/
            ├── index.ts
            └── project.type.ts
```

## Traduction

Le site est disponible en français et en anglais via i18next. La langue est détectée automatiquement selon le navigateur.

Les textes affichés sont centralisés dans les fichiers `src/shared/locales/translation/fr.json` et `src/shared/locales/translation/en.json`, tandis que les données statiques du CV sont dans `src/shared/data/cv/cv.data.ts`.