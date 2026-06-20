# harry-lam-portfolio

Portfolio de mes années d'études — Hoang Anh Harry LAM.

## Installation

```bash
git clone https://github.com/LAM-Harry/harry-lam-portfolio.git
cd harry-lam-portfolio
npm install
npm run dev   # → http://localhost:5173
```

## Structure

```
src/
├── App.tsx
├── main.tsx
├── i18n/
│   └── index.ts
├── pages/
│   ├── index.ts
│   ├── ui/
│   │   └── Section.tsx
│   ├── profil/
│   │   └── sections/
│   │       ├── Hero/
│   │       │   ├── Hero.tsx
│   │       │   └── Hero.module.css
│   │       ├── StatsBar/
│   │       │   ├── StatsBar.tsx
│   │       │   └── StatsBar.module.css
│   │       ├── Experience/
│   │       │   ├── Experience.tsx
│   │       │   └── Experience.module.css
│   │       ├── Projects/
│   │       │   ├── Projects.tsx
│   │       │   └── Projects.module.css
│   │       ├── Skills/
│   │       │   ├── Skills.tsx
│   │       │   └── Skills.module.css
│   │       ├── Formation/
│   │       │   ├── Formation.tsx
│   │       │   └── Formation.module.css
│   │       ├── Methodologies/
│   │       │   ├── Methodologies.tsx
│   │       │   └── Methodologies.module.css
│   │       ├── Supports/
│   │       │   ├── Supports.tsx
│   │       │   └── Supports.module.css
│   │       └── LQH/
│   │           ├── LQH.tsx
│   │           └── LQH.module.css
│   └── projects/
│       ├── Projects.tsx
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
    │   ├── logo-formation/      ← logos AIFE, KAIST, IUT, Lycée MD
    │   └── projects/            ← captures game-of-life, nn-project, olga
    ├── data/
    │   ├── cv/
    │   │   └── cv.data.ts       ← toutes les données du CV (modifier ici)
    │   └── project/
    │       └── project.data.ts  ← données des projets
    ├── docs/
    │   ├── LAM_CV_FR.pdf
    │   └── LAM_CV_EN.pdf
    ├── layout/
    │   ├── MainLayout.tsx
    │   └── MainLayout.module.css
    ├── locales/
    │   └── translation/
    │       ├── fr.json          ← traductions françaises
    │       └── en.json          ← traductions anglaises
    ├── styles/
    │   └── globals.css
    └── types/
        ├── cv/
        │   └── cv.type.ts
        └── project/
            └── project.type.ts
```

## Traduction

Le site est disponible en **français** et en **anglais** via i18next. La langue est détectée automatiquement depuis le navigateur.

Les fichiers de traduction sont dans `src/shared/locales/translation/`.