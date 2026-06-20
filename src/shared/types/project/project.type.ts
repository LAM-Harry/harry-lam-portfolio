// Données statiques d'un projet (sans textes traduisibles)
export interface ProjectStatic {
  id: string
  category: 'devops' | 'deeplearning' | 'leisureGaming'
  tags: string[]
  images: string[]
  github?: string
  partnerLogo?: string
  partnerUrl?: string
}

// Projet complet avec textes traduits (construit dynamiquement)
export interface ProjectDetail extends ProjectStatic {
  title: string
  org: string
  date: string
  description: string
  longDescription?: string
  features?: string[]
  techDetails?: string[]
}

// Interface pour une catégorie de projets
export interface Category {
  id: string
  title: string
  icon: string
  description: string
  projects: ProjectDetail[]
}
