import { useTranslation } from 'react-i18next'
import { Section } from '../../../ui/Section'
import styles from './Methodologies.module.css'

// Section Méthodes de gestion de projet
export function Methodologies() {
  const { t } = useTranslation()

  return (
    <Section number="04" title={t('sections.methodologies')}>
      <div className={styles.grid}>
        {/* Scrum */}
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
              <circle cx="18" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="30" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="24" cy="28" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="24" cy="36" r="2" fill="currentColor" fillOpacity="0.5"/>
              <circle cx="24" cy="40" r="1.5" fill="currentColor" fillOpacity="0.3"/>
              <circle cx="24" cy="44" r="1" fill="currentColor" fillOpacity="0.15"/>
              <rect x="34" y="6" width="10" height="6" rx="3" fill="var(--accent)" fillOpacity="0.15" stroke="currentColor" strokeWidth="1"/>
              <text x="39" y="11" fontSize="6" fill="currentColor" textAnchor="middle" fontWeight="bold">DAILY</text>
            </svg>
          </div>
          <div>
            <span className={styles.name}>{t('methodologies.scrum')}</span>
            <span className={styles.badge}>{t('methodologies.scrumBadge')}</span>
          </div>
        </div>

        {/* Kanban */}
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="16" width="36" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="24" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="36" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="16" cy="26" r="2" fill="currentColor" fillOpacity="0.2"/>
              <circle cx="24" cy="26" r="2" fill="currentColor" fillOpacity="0.3"/>
              <circle cx="32" cy="26" r="2" fill="currentColor" fillOpacity="0.2"/>
              <rect x="32" y="34" width="12" height="5" rx="2.5" fill="var(--accent)" fillOpacity="0.15" stroke="currentColor" strokeWidth="0.8"/>
              <text x="38" y="38" fontSize="5" fill="currentColor" textAnchor="middle" fontWeight="bold">STANDUP</text>
            </svg>
          </div>
          <div>
            <span className={styles.name}>{t('methodologies.kanban')}</span>
            <span className={styles.badge}>{t('methodologies.kanbanBadge')}</span>
          </div>
        </div>
      </div>
    </Section>
  )
}