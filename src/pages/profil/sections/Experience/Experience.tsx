import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { experiences } from '../../../../shared/data/cv/cv.data'
import { Section } from '../../../ui/Section'
import styles from './Experience.module.css'

export function Experience() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  // Navigation vers la page projets avec ouverture du dossier Deep Learning
  const handleKaistClick = () => {
    navigate('/projets', { state: { fromKaist: true } })
  }

  return (
    <Section number="01" title={t('sections.experience')}>
      <div className={styles.list}>
        {experiences.map((exp, index) => {
          const key = index === 0 ? 'aife' : 'kaist'
          const isKaist = key === 'kaist'

          const content = (
            <article className={`card card-accent ${styles.card}`}>
              {/* En-tête avec logo, titre et date */}
              <div className={styles.header}>
                {exp.logo && (
                  <a 
                    href={exp.url || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.logoLink}
                    title={t(`experience.${key}.org`)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className={styles.logoWrapper}>
                      <img src={exp.logo} alt={exp.org} className={styles.logo} />
                    </div>
                  </a>
                )}
                <div className={styles.info}>
                  <p className="card-title">{t(`experience.${key}.title`)}</p>
                  <p className="card-org">{t(`experience.${key}.org`)}</p>
                </div>
                <span className="card-date">{t(`dates.${key}`)}</span>
              </div>

              {/* Description */}
              <p className="card-desc">{t(`experience.${key}.description`)}</p>

              {/* Tags */}
              <div className="tags">
                {exp.tags.map((tag) => (
                  <span className={`tag ${exp.hot ? 'hot' : ''}`} key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          )

          // Si c'est KAIST, la carte est cliquable et redirige vers /projets
          if (isKaist) {
            return (
              <div 
                key={exp.title}
                onClick={handleKaistClick}
                className={styles.cardLink}
                style={{ cursor: 'pointer' }}
              >
                {content}
              </div>
            )
          }

          // Sinon, carte normale (non cliquable)
          return (
            <div key={exp.title} className={styles.cardWrapper}>
              {content}
            </div>
          )
        })}
      </div>
    </Section>
  )
}