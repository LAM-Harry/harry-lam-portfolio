import type { ProjectStatic, Category } from '../../types/project'

// Données statiques des projets (sans textes traduisibles)
export const projectsData: ProjectStatic[] = [
  {
    id: 'game-of-life',
    category: 'leisureGaming',
    tags: ['Python', 'Tkinter', 'Threading', 'JSON'],
    images: ['/src/shared/assets/projects/game-of-life/game.png'],
    github: 'https://github.com/LAM-Harry/jeu-de-la-vie',
  },
  {
    id: 'exoskeleton-deep-learning-interface',
    category: 'deeplearning',
    tags: ['Python', 'PyQt5', 'TensorFlow', 'Keras', 'Deep Learning'],
    images: [
      '/src/shared/assets/projects/nn-project/dataset-builder.png',
      '/src/shared/assets/projects/nn-project/nn-designer.png',
      '/src/shared/assets/projects/nn-project/nn-evaluator1.png',
      '/src/shared/assets/projects/nn-project/nn-evaluator2.png',
      '/src/shared/assets/projects/nn-project/nn-evaluator3.png',
    ],
  },
  {
    id: 'olga-workflow-platform',
    category: 'devops',
    tags: ['React', 'Spring Boot', 'Docker', 'MySQL', 'Firebase', 'Nginx'],
    images: ['/src/shared/assets/projects/olga/olga-architecture.png'],
    partnerLogo: '/src/shared/assets/projects/olga/logo-lissi.png',
    partnerUrl: 'https://www.lissi.fr/accueil/',
  },
]

// Catégories (icônes statiques, textes via i18n dans le composant)
export const categoryIds = ['leisureGaming', 'deeplearning', 'devops'] as const

export const categoryIcons: Record<string, string> = {
  leisureGaming: '🎮',
  deeplearning: '🧠',
  devops: '♾️',
}
