import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight, Gamepad2, BrainCog, Infinity } from 'lucide-react'
import { ProjectStatic } from '../../../../shared/types/project'
import styles from './ProjectCard.module.css'

export function ProjectCard({ id, category, tags, images, github, partnerLogo, partnerUrl }: ProjectStatic) {
  const { t } = useTranslation()

  // Index de l'image affichée dans le mini-carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const hasMultipleImages = images.length > 1

  const goToPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Icône selon la catégorie du projet
  const getIcon = () => {
    switch (category) {
      case 'leisureGaming':
        return <Gamepad2 size={24} className={styles.icon} />
      case 'deeplearning':
        return <BrainCog size={24} className={styles.icon} />
      case 'devops':
        return <Infinity size={24} className={styles.icon} />  // ← Icône Infini
      default:
        return <BrainCog size={24} className={styles.icon} />
    }
  }

  // Textes traduits — même pattern que Experience/Formation :
  // les données statiques restent dans project.data.ts,
  // les textes sont dans fr.json / en.json sous "projectsDetail.<id>.*"
  const title       = t(`projectsDetail.${id}.title`)
  const org         = t(`projectsDetail.${id}.org`)
  const date        = t(`projectsDetail.${id}.date`)
  const description = t(`projectsDetail.${id}.description`)
  const longDesc    = t(`projectsDetail.${id}.longDescription`, { defaultValue: '' })
  const features    = t(`projectsDetail.${id}.features`,    { returnObjects: true }) as string[]
  const techDetails = t(`projectsDetail.${id}.techDetails`, { returnObjects: true }) as string[]

  return (
    <div className={`card ${styles.card}`}>

      {/* Image principale avec mini-carousel si plusieurs images */}
      <div className={styles.mediaContainer}>
        <img src={images[currentImageIndex]} alt={title} className={styles.cardImage} />

        {hasMultipleImages && (
          <>
            <button onClick={goToPrevImage} className={`${styles.imageArrow} ${styles.imageArrowLeft}`} aria-label={t('projectCard.prevImage')}>
              <ChevronLeft size={20} />
            </button>
            <button onClick={goToNextImage} className={`${styles.imageArrow} ${styles.imageArrowRight}`} aria-label={t('projectCard.nextImage')}>
              <ChevronRight size={20} />
            </button>

            {/* Points de pagination */}
            <div className={styles.imageDots}>
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index) }}
                  className={`${styles.imageDot} ${index === currentImageIndex ? styles.imageDotActive : ''}`}
                  aria-label={`Image ${index + 1}`}
                />
                ))}
            </div>
          </>
        )}
      </div>

      {/* Contenu textuel de la carte */}
      <div className={styles.cardContent}>

        {/* Icône catégorie */}
        <div className={styles.top}>{getIcon()}</div>

        {/* En-tête : titre, organisation, date */}
        <div className="card-header">
          <div>
            <p className={styles.cardTitle}>{title}</p>
            <p className={styles.cardOrg}>{org}</p>
          </div>
          <span className="card-date">{date}</span>
        </div>

        {/* Description courte */}
        <p className={styles.cardDesc}>{description}</p>

        {/* Description longue (optionnelle) */}
        {longDesc && <p className={styles.cardLongDesc}>{longDesc}</p>}

        {/* Liste des fonctionnalités */}
        {Array.isArray(features) && features.length > 0 && (
          <div className={styles.features}>
            <h4>{t('projectCard.features')}</h4>
            <ul>{features.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
        )}

        {/* Détails techniques */}
        {Array.isArray(techDetails) && techDetails.length > 0 && (
          <div className={styles.techDetails}>
            <h4>{t('projectCard.techDetails')}</h4>
            <ul>{techDetails.map((td) => <li key={td}>{td}</li>)}</ul>
          </div>
        )}

        {/* Tags technologiques */}
        <div className="tags">
          {tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>

        {/* Logo partenaire (optionnel) */}
        {partnerLogo && partnerUrl && (
          <div className={styles.partnerSection}>
            <p className={styles.partnerLabel}>{t('projectCard.partner')}</p>
            <a href={partnerUrl} target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
              <img src={partnerLogo} alt={t('projectCard.partnerLogoAlt')} className={styles.partnerLogo} />
            </a>
          </div>
        )}

        {/* Lien GitHub */}
        {github && (
          <div className={styles.cardFooter}>
            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
              <i className="ti ti-brand-github" aria-hidden="true" />
              {t('projectCard.github')}
            </a>
          </div>
        )}

      </div>
    </div>
  )
}