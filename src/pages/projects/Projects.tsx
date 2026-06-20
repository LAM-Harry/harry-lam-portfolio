import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Folder, FolderOpen } from 'lucide-react'
import { projectsData, categoryIds, categoryIcons } from '../../shared/data/project'
import { Section } from '../ui/Section'
import { ProjectCarousel } from './components/Carrousel/ProjectCarousel'
import styles from './Projects.module.css'

// Page listant tous les projets organisés par catégorie (dossiers cliquables)
export function Projects() {
  const location = useLocation()
  const { t } = useTranslation()

  // Détermine si on arrive depuis une expérience spécifique (pour ouvrir le bon dossier)
  const fromKaist = location.state?.fromKaist || false
  const fromOlga  = location.state?.fromOlga  || false

  // Identifiant de la catégorie actuellement ouverte (null = tout fermé)
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  // Ouvre/ferme un dossier — un seul à la fois
  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id)
  }

  // Ouvre automatiquement le bon dossier selon la provenance
  useEffect(() => {
    if (fromKaist)     setOpenCategory('deeplearning')
    else if (fromOlga) setOpenCategory('devops')
  }, [fromKaist, fromOlga])

  return (
    <Section
      number={<Folder className={styles.icon} size={24} />}
      title={t('sections.allProjects')}
    >
      <div className={styles.container}>
        {categoryIds.map((id) => {
          const isOpen = openCategory === id

          // Projets de cette catégorie (données statiques : images, tags, etc.)
          const categoryProjects = projectsData.filter((p) => p.category === id)
          const count = categoryProjects.length

          // Textes traduits de la catégorie
          const title       = t(`categoriesDetail.${id}.title`)
          const description = t(`categoriesDetail.${id}.description`)

          return (
            <div key={id} className={styles.folderItem}>

              {/* En-tête cliquable du dossier */}
              <div className={styles.folderHeader} onClick={() => toggleCategory(id)}>
                {isOpen
                  ? <FolderOpen size={24} className={styles.folderIcon} />
                  : <Folder    size={24} className={styles.folderIcon} />
                }
                <span className={styles.folderName}>
                  {categoryIcons[id]} {title}
                </span>
                <span className={styles.folderCount}>
                  ({t('projectPage.projectCount', { count })})
                </span>
                <span className={styles.folderArrow}>{isOpen ? '▼' : '▶'}</span>
              </div>

              {/* Contenu du dossier : description + carousel des projets */}
              {isOpen && (
                <div className={styles.folderContent}>
                  <p className={styles.categoryDesc}>{description}</p>
                  <ProjectCarousel projects={categoryProjects} />
                </div>
              )}

            </div>
          )
        })}
      </div>
    </Section>
  )
}