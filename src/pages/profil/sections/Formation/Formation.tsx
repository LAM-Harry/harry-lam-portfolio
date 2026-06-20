import { useTranslation } from 'react-i18next'
import { formations } from '../../../../shared/data/cv/cv.data'
import { Section } from '../../../ui/Section'
import styles from './Formation.module.css'

// Section Formation
export function Formation() {
  const { t } = useTranslation()

  return (
    <Section number="06" title={t('sections.formation')}>
      <div className={styles.list}>
        {formations.map((f, index) => {
          const key = index === 0 ? 'but' : 'bac'
          return (
            <div className={`card ${styles.card}`} key={f.degree}>
              {/* Logo cliquable */}
              {f.logo && (
                <a 
                  href={f.url || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.logoLink}
                  title={t(`formation.${key}.school`)}
                >
                  <div className={styles.logoWrapper}>
                    <img src={f.logo} alt={f.school} className={styles.logo} />
                  </div>
                </a>
              )}

              {/* Contenu principal */}
              <div className={styles.content}>
                {/* Colonne gauche : diplôme, école, mention */}
                <div className={styles.left}>
                  <p className={styles.degree}>{t(`formation.${key}.degree`)}</p>
                  {f.subtitle && <p className={styles.subtitle}>{t(`formation.${key}.subtitle`)}</p>}
                  <p className={styles.school}>{t(`formation.${key}.school`)}</p>
                  {f.mention && <span className={styles.mention}>{t(`formation.${key}.mention`)}</span>}
                </div>

                {/* Colonne droite : années et lieu */}
                <div className={styles.right}>
                  <p className={styles.years}>{f.years}</p>
                  <p className={styles.loc}>{t(`locations.${key}`)}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}