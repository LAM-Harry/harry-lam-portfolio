import { useTranslation } from 'react-i18next'
import { certifications } from '../../../../shared/data/cv/cv.data'
import { Section } from '../../../ui/Section'
import styles from './Licenses.module.css'

// Section Licences et certifications
export function Licenses() {
  const { t } = useTranslation()

  return (
    <Section number="07" title={t('sections.certifications')}>
      <div className={styles.list}>
        {certifications.map((certification) => (
          <div className={`card ${styles.card}`} key={certification.title}>
            <div className={styles.content}>
              <div className={styles.left}>
                <span className={styles.badge}>{t('licenses.badge')}</span>
                <p className={styles.title}>{certification.title}</p>
                <p className={styles.score}>{certification.score}</p>
              </div>

              {certification.pdf && (
                <a className={styles.button} href={certification.pdf} target="_blank" rel="noopener noreferrer">
                  {t('licenses.button')}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
