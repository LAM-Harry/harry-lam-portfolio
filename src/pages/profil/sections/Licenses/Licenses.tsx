import { useTranslation } from 'react-i18next'
import { certifications } from '../../../../shared/data/cv/cv.data'
import { Section } from '../../../ui/Section'
import styles from './Licenses.module.css'

// Section Licences et certifications
export function Licenses() {
  const { t, i18n } = useTranslation()
  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(i18n.language, { month: 'long', year: 'numeric', timeZone: 'UTC' })
      .format(new Date(`${date}-01T00:00:00Z`))

  return (
    <Section number="07" title={t('sections.certifications')}>
      <div className={styles.list}>
        {certifications.map((certification) => (
          <div className={`card ${styles.card}`} key={certification.title}>
            {certification.logo && (
              <div className={styles.logoWrapper}>
                <img src={certification.logo} alt={certification.provider} className={styles.logo} />
              </div>
            )}
            <div className={styles.content}>
              <div className={styles.left}>
                <span className={styles.badge}>{t('licenses.badge')}</span>
                <div className={styles.heading}>
                  <p className={styles.title}>{certification.title}</p>
                  <p className={styles.score}>{certification.score}</p>
                </div>
                <div className={styles.details}>
                  <p>{t('licenses.issued', { date: formatDate(certification.issued) })} · {t('licenses.expires', { date: formatDate(certification.expires) })}</p>
                  <p>{t('licenses.credentialId', { id: certification.credentialId })}</p>
                </div>
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
