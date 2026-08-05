// Interface pour une expérience professionnelle
export interface Experience {
  title: string
  org: string
  date: string
  description: string
  tags: string[]
  hot?: boolean
  logo?: string
  url?: string
}

// Interface pour un projet académique
export interface Project {
  title: string
  org: string
  date: string
  description: string
  tags: string[]
}

// Interface pour une compétence technique
export interface Skill {
  name: string
  category: string
}

// Interface pour un support informatique
export interface Support {
  category: string
  items: string[]
}

// Interface pour une formation
export interface Formation {
  key?: string
  degree: string
  subtitle?: string
  school: string
  years: string
  location: string
  mention?: string
  logo?: string
  url?: string
}

// Interface pour une statistique de la barre (value et label traduits via key)
export interface Stat {
  key: string
}

// Interface pour une certification ou licence
export interface Certification {
  title: string
  score: string
  issued: string
  expires: string
  pdf?: string
}

// Interface pour une langue
export interface Language {
  name: string
  level: string
}