import type { Certification, Experience, Formation, Language, Project, Skill, Stat, Support } from '../../types/cv/cv.type'

// Infos personnelles
export const meta = {
  available: 'Étudiant Informatique',
  email: 'harrylam317@gmail.com',
  github: 'https://github.com/LAM-Harry',
  linkedin: 'https://www.linkedin.com/in/hoang-anh-harry-lam-9646182a3/',
  number: '5',
}

// Clés des statistiques - value et label sont traduits dans fr.json / en.json sous "stats.<key>.*"
export const stats: Stat[] = [
  { key: 'internships'  },
  { key: 'formation'    },
  { key: 'technologies' },
]

// Expériences professionnelles
export const experiences: Experience[] = [
  {
    title: 'Stagiaire Développeur Full Stack - Industrialisation du Design System',
    org: 'AIFE · Agence pour l\'Informatique Financière de l\'État · Ministère des Comptes Publics',
    date: 'Mars - Juin 2026',
    description: 'Développement et industrialisation d\'une librairie de composants Angular pour l\'État dans le respect du RGAA (Référentiel Général d\'Amélioration de l\'Accessibilité). Mise en place d\'un plugin Figma pour l\'export et la gestion des tokens de design. Contribution au développement Full Stack du projet ASTRA (Assistant Textes Réglementaires Automatisés) et réalisation de POCs sur des sites liés aux marchés publics et à la commande publique pour valider l\'adaptabilité des composants dans des contextes applicatifs variés.',
    tags: ['Angular', 'JavaScript', 'Express.js', 'PostgreSQL', 'REST APIs'],
    hot: true,
    logo: '/src/shared/assets/logo/internship/logo-aife.png',
    url: 'https://aife.economie.gouv.fr/',
  },
  {
    title: 'Stagiaire Data Scientist - R&D en Deep Learning - Interface exosquelette',
    org: 'KAIST · Korea Advanced Institute of Science & Technology · Corée du Sud',
    date: 'Avril - Juin 2025',
    description: 'Conception d\'une interface graphique développée avec la bibliothèque PyQt5 pour visualiser en temps réel les données physiologiques (pMMG, EMG, IMU) dans le cadre du contrôle d’un exosquelette. Développement d’un pipeline de deep learning avec TensorFlow/Keras (RNN, GRU, LSTM, Transformer) pour des tâches de classification et de régression.',
    tags: ['Python', 'PyQt5', 'TensorFlow', 'Keras', 'Deep Learning'],
    hot: true,
    logo: '/src/shared/assets/logo/internship/logo-kaist.png',
    url: 'https://www.kaist.ac.kr/en/',
  },
]

// Projets académiques
export const projects: Project[] = [
  {
    title: 'Plateforme no-code médicale',
    org: 'Projet académique - DevOps',
    date: 'Sept 2025 - Juin 2026',
    description: 'Plateforme web no-code médicale en React (TypeScript) et Spring Boot pour workflows médicaux avec formulaires dynamiques. Sécurité Firebase et déploiement avec Docker/Nginx.',
    tags: ['React', 'Spring Boot', 'Docker', 'MySQL', 'Firebase', 'Nginx'],
  },
  {
    title: 'Application météo interactive',
    org: 'Projet académique - Dév. Applicatif',
    date: 'Sept 2024 - Avril 2025',
    description: 'Application web en PHP et JavaScript exploitant l\'API SYNOP pour analyser les conditions climatiques. Gestion des données des stations météorologiques via PhpMyAdmin et MySQL.',
    tags: ['PHP', 'JavaScript', 'MySQL', 'API', 'PhpMyAdmin'],
  },
]

// Compétences techniques
export const skills: Skill[] = [
  // Langages
  { name: 'Java', category: 'Langages' },
  { name: 'Python', category: 'Langages' },
  { name: 'langages C/C#', category: 'Langages' },  
  { name: 'JavaScript/TypeScript', category: 'Langages' },
  { name: 'PHP', category: 'Langages' },
  { name: 'HTML', category: 'Langages' },
  { name: 'CSS/SCSS', category: 'Langages' },
  // Frameworks
  { name: 'React', category: 'Frameworks' },
  { name: 'Angular', category: 'Frameworks' },
  { name: 'Node.js/Express.js', category: 'Frameworks' },
  { name: 'Spring Boot', category: 'Frameworks' },
  { name: 'Flask', category: 'Frameworks' },
  { name: 'PyQt5', category: 'Frameworks' },
  { name: 'Tkinter', category: 'Frameworks' },
  // Bases de données
  { name: 'PL/SQL', category: 'Bases de données' },
  { name: 'MySQL', category: 'Bases de données' },
  { name: 'PostgreSQL', category: 'Bases de données' },
  { name: 'MongoDB', category: 'Bases de données' },
  { name: 'Redis', category: 'Bases de données' },
  { name: 'Neo4j', category: 'Bases de données' },
  { name: 'Qdrant', category: 'Bases de données' },
  // IA & Machine Learning
  { name: 'TensorFlow', category: 'IA & Deep Learning' },
  { name: 'Keras', category: 'IA & Deep Learning' },
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
    items: ['VirtualBox', 'Docker Desktop', 'AWS'],
  },
  {
    category: 'Gestion de version',
    items: ['Git', 'GitHub', 'Gitlab'],
  },
]

// Formations
export const formations: Formation[] = [
  {
    key: 'master',
    degree: 'Master of Science (MSc)',
    subtitle: 'Data Engineering & Artificial Intelligence',
    school: 'ESILV · École supérieure d\'ingénieurs Léonard-de-Vinci',
    years: '2026 - 2028',
    location: 'Paris La Défense, France',
    logo: '/src/shared/assets/logo/education/logo-esilv.png',
    url: 'https://www.esilv.fr/formations/msc-computer-science-data-science/',
  },
  {
    key: 'but',
    degree: 'BUT Informatique',
    subtitle: 'Réalisation d’applications : conception, développement, validation',
    school: 'IUT de Créteil-Vitry · Université Paris-Est Créteil',
    years: '2023 - 2026',
    location: 'Vitry-sur-Seine, 94',
    logo: '/src/shared/assets/logo/education/logo-iut-creteil.png',
    url: 'https://iut.u-pec.fr/formations/but/but-informatique',
  },
  {
    key: 'bac',
    degree: 'Baccalauréat Série Général',
    subtitle: 'Mathématiques / Numérique et Sciences Informatiques (NSI)',
    school: 'Lycée français international Marguerite Duras',
    years: '2023',
    location: 'Hô Chi Minh-Ville, Vietnam',
    mention: 'Mention Assez Bien',
    logo: '/src/shared/assets/logo/education/logo-lycee-md.png',
    url: 'https://lfiduras.com/',
  },
]

// Licences et certifications
export const certifications: Certification[] = [
  {
    title: 'TOEIC Listening & Reading',
    score: 'Score : 750/990',
    provider: 'TOEIC Program',
    issued: '2026-06',
    expires: '2028-06',
    credentialId: '69728612',
    logo: '/src/shared/assets/logo/certificate/logo-toeic.svg',
    pdf: '/src/shared/docs/certificate/certificate_20260609181646.pdf',
  },
]

// Langues
export const languages: Language[] = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Vietnamien', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'Professionnel' },
  { name: 'Espagnol', level: 'A2+ - Scolaire' },
]

// Qualités
export const qualities = ['Travail en équipe', 'Assidu', 'Déterminé', 'Curieux', 'Rigoureux']