import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ProjectStatic } from '../../../../shared/types/project'
import { ProjectCard } from '../Card/ProjectCard'
import styles from './ProjectCarousel.module.css'

interface ProjectCarouselProps {
  projects: ProjectStatic[]
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const { t } = useTranslation()

  // Index du projet actuellement affiché
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalProjects = projects.length

  // Catégorie vide
  if (totalProjects === 0) {
    return <p className={styles.empty}>{t('projectPage.empty')}</p>
  }

  // Un seul projet : pas besoin de flèches
  if (totalProjects === 1) {
    return (
      <div className={styles.singleProject}>
        <ProjectCard {...projects[0]} />
      </div>
    )
  }

  const goToPrevious = () => setCurrentIndex((prev) => (prev === 0 ? totalProjects - 1 : prev - 1))
  const goToNext     = () => setCurrentIndex((prev) => (prev === totalProjects - 1 ? 0 : prev + 1))

  return (
    <div className={styles.carouselContainer}>

      {/* Fond flou décoratif derrière la carte */}
      <div className={styles.blurBackground} />

      {/* Flèche gauche */}
      <button onClick={goToPrevious} className={`${styles.arrowButton} ${styles.arrowLeft}`}>
        <ChevronLeft size={40} />
      </button>

      {/* Carte du projet courant */}
      <div className={styles.cardWrapper}>
        <ProjectCard {...projects[currentIndex]} />
      </div>

      {/* Flèche droite */}
      <button onClick={goToNext} className={`${styles.arrowButton} ${styles.arrowRight}`}>
        <ChevronRight size={40} />
      </button>

      {/* Points de pagination cliquables */}
      <div className={styles.pagination}>
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
          />
        ))}
      </div>

    </div>
  )
}