import type { Experience, Formation, Language, Project, Skill, Stat, Support } from '../../types/cv/cv.type'

// Infos personnelles
export const meta = {
  available: 'Étudiant Informatique',
  about: 'Je termine bientôt mon BUT Informatique à l’IUT de Créteil-Vitry (Université Paris-Est Créteil). Motivé et curieux, je conçois des projets techniques et je cherche à progresser dans le domaine de l’IA.',
  email: 'harrylam317@gmail.com',
  github: 'https://github.com/LAM-Harry',
  linkedin: 'https://www.linkedin.com/in/hoang-anh-harry-lam-9646182a3/',
  number: '5',
}

// Clés des statistiques — value et label sont traduits dans fr.json / en.json sous "stats.<key>.*"
export const stats: Stat[] = [
  { key: 'internships'  },
  { key: 'formation'    },
  { key: 'technologies' },
]

// Expériences professionnelles
export const experiences: Experience[] = [
  {
    title: 'Stagiaire Développeur Fullstack — Industrialisation du Design System',
    org: 'AIFE · Agence pour l\'Informatique Financière de l\'État · Ministère des Comptes Publics',
    date: 'Mars — Juin 2026',
    description: 'Développement et industrialisation d\'une librairie de composants Angular/TypeScript pour l\'État dans le respect du RGAA (Référentiel Général d\'Amélioration de l\'Accessibilité). Mise en place d\'un plugin Figma pour l\'export et la gestion des tokens de design. Contribution au développement fullstack du projet ASTRA (Assistant Textes Réglementaires Automatisés) et réalisation de POCs sur des sites liés aux marchés publics et à la commande publique pour valider l\'adaptabilité des composants dans des contextes applicatifs variés.',
    tags: ['Angular', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Figma', 'RGAA'],
    hot: true,
    logo: '/src/shared/assets/logo-formation/logo-aife.png',
    url: 'https://aife.economie.gouv.fr/',
  },
  {
    title: 'Stagiaire Développeur — Interface exosquelette',
    org: 'KAIST · Korea Advanced Institute of Science & Technology · Corée du Sud',
    date: 'Avril — Juin 2025',
    description: 'Conception d\'une interface graphique développée avec la bibliothèque PyQt5 pour visualiser en temps réel les données physiologiques (pMMG, EMG, IMU) dans le cadre du contrôle d’un exosquelette. Développement d’un pipeline de deep learning avec TensorFlow/Keras (RNN, GRU, LSTM, Transformer) pour des tâches de classification et de régression.',
    tags: ['Python', 'PyQt5', 'TensorFlow', 'Keras', 'Deep Learning'],
    hot: true,
    logo: '/src/shared/assets/logo-formation/logo-kaist.png',
    url: 'https://www.kaist.ac.kr/en/',
  },
]

// Projets académiques
export const projects: Project[] = [
  {
    title: 'Plateforme no-code médicale',
    org: 'Projet académique — DevOps',
    date: 'Sept 2025 — Juin 2026',
    description: 'Plateforme web no-code médicale en React (TypeScript) et Java (Spring Boot) pour workflows médicaux avec formulaires dynamiques. Sécurité Firebase et déploiement avec Node.js (npm).',
    tags: ['React', 'Spring Boot', 'Docker', 'MySQL', 'Firebase', 'Nginx'],
  },
  {
    title: 'Application météo interactive',
    org: 'Projet académique - Dév. Applicatif',
    date: 'Sept 2024 — Avril 2025',
    description: 'Application web en PHP et JavaScript exploitant l\'API SYNOP pour analyser les conditions climatiques. Gestion des données des stations météorologiques via PhpMyAdmin et MySQL.',
    tags: ['PHP', 'JavaScript', 'MySQL', 'API', 'PhpMyAdmin'],
  },
]

// Compétences techniques
export const skills: Skill[] = [
  // Langages
  { name: 'Java', category: 'Langages' },
  { name: 'Python', category: 'Langages' },
  { name: 'langageC', category: 'Langages' },  // ← Clé pour traduction
  { name: 'JavaScript / TypeScript', category: 'Langages' },
  { name: 'HTML / CSS / PHP', category: 'Langages' },
  // Frameworks
  { name: 'React', category: 'Frameworks' },
  { name: 'Angular', category: 'Frameworks' },
  { name: 'PyQt5', category: 'Frameworks' },
  { name: 'Node.js', category: 'Frameworks' },
  { name: 'Express.js', category: 'Frameworks' },
  { name: 'Spring Boot', category: 'Frameworks' },
  { name: 'Flask', category: 'Frameworks' },
  // Bases de données
  { name: 'PL/SQL', category: 'Bases de données' },
  { name: 'MySQL', category: 'Bases de données' },
  { name: 'PostgreSQL', category: 'Bases de données' },
  { name: 'MongoDB', category: 'Bases de données' },
  { name: 'Redis', category: 'Bases de données' },
  { name: 'Neo4j', category: 'Bases de données' },
  { name: 'Qdrant', category: 'Bases de données' },
  // IA & Machine Learning
  { name: 'TensorFlow', category: 'IA & Deep/Machine Learning' },
  { name: 'Keras', category: 'IA & Deep/Machine Learning' },
  // DevOps
  { name: 'Docker', category: 'DevOps & Infrastructure' },
  { name: 'GitHub Actions', category: 'DevOps & Infrastructure' },
  // Systèmes
  { name: 'Linux', category: 'Systèmes & Réseaux' },
  { name: 'Windows', category: 'Systèmes & Réseaux' },
  { name: 'Apache2', category: 'Systèmes & Réseaux' },
  { name: 'SSH', category: 'Systèmes & Réseaux' },
  { name: 'FTP / SFTP', category: 'Systèmes & Réseaux' },
]

// Méthodes de gestion de projet
export const methodologies = ['Scrum', 'Kanban']

// Supports informatiques
export const supports: Support[] = [
  {
    category: 'IDE',
    items: ['Visual Studio Code', 'Visual Studio 2022', 'CodeBlocks', 'Eclipse'],
  },
  {
    category: 'Bases de données',
    items: ['DBeaver', 'Oracle', 'phpMyAdmin'],
  },
  {
    category: 'Machines virtuelles & Conteneurs',
    items: ['VirtualBox', 'Docker Desktop'],
  },
  {
    category: 'Gestion de version',
    items: ['Git', 'GitHub', 'Gitlab'],
  },
]

// Formations
export const formations: Formation[] = [
  {
    degree: 'BUT Informatique',
    subtitle: 'Réalisation d’applications : conception, développement, validation',
    school: 'IUT de Créteil-Vitry · Université Paris-Est Créteil',
    years: '2023 — 2026',
    location: 'Vitry-sur-Seine, 94',
    logo: '/src/shared/assets/logo-formation/logo-iut-creteil.png',
    url: 'https://iut.u-pec.fr/formations/but/but-informatique',
  },
  {
    degree: 'Baccalauréat Série Général',
    subtitle: 'Maths / NSI',
    school: 'Lycée français international Marguerite Duras',
    years: '2023',
    location: 'Hô Chi Minh-Ville, Vietnam',
    mention: 'Mention Assez Bien',
    logo: '/src/shared/assets/logo-formation/logo-lycee-md.png',
    url: 'https://lfiduras.com/',
  },
]

// Langues
export const languages: Language[] = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Vietnamien', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'B2 — Intermédiaire' },
  { name: 'Espagnol', level: 'A2+ — Scolaire' },
]

// Qualités
export const qualities = ['Travail en équipe', 'Assidu', 'Déterminé', 'Curieux', 'Rigoureux']