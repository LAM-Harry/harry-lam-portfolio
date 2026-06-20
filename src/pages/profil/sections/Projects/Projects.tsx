import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { projects } from '../../../../shared/data/cv/cv.data'
import { Section } from '../../../ui/Section'
import styles from './Projects.module.css'

// Section Projets académiques
export function Projects() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  // Navigation vers la page projets avec ouverture du dossier DevOps
  const handleOlgaClick = () => {
    navigate('/projets', { state: { fromOlga: true } })
  }

  return (
    <Section number="02" title={t('sections.projects')}>
      <div className={styles.grid}>
        {projects.map((p, index) => {
          const key = index === 0 ? 'medical' : 'weather'
          const isOlga = key === 'medical'  // OLGA est le premier projet

          const content = (
            <article className={`card ${styles.card}`} key={p.title}>
              {/* Icône en haut */}
              <div className={styles.top}>
                <i className="ti ti-code" aria-hidden="true" />
              </div>

              {/* En-tête avec titre, organisation et date */}
              <div className="card-header">
                <div>
                  <p className="card-title">{t(`projects.${key}.title`)}</p>
                  <p className="card-org">{t(`projects.${key}.org`)}</p>
                </div>
                <span className="card-date">{t(`dates.${key}`)}</span>
              </div>

              {/* Description */}
              <p className="card-desc">{t(`projects.${key}.description`)}</p>

              {/* Tags */}
              <div className="tags">
                {p.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          )

          // Si c'est OLGA, la carte est cliquable et redirige vers /projets
          if (isOlga) {
            return (
              <div 
                key={p.title}
                onClick={handleOlgaClick}
                className={styles.cardLink}
                style={{ cursor: 'pointer' }}
              >
                {content}
              </div>
            )
          }

          // Sinon, carte normale (non cliquable)
          return (
            <div key={p.title} className={styles.cardWrapper}>
              {content}
            </div>
          )
        })}
      </div>
    </Section>
  )
}