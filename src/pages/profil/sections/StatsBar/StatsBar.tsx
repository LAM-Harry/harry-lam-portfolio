import { useTranslation } from 'react-i18next'
import { stats } from '../../../../shared/data/cv/cv.data'
import styles from './StatsBar.module.css'

// Barre de statistiques
export function StatsBar() {
  const { t } = useTranslation()

  return (
    <div className={styles.bar}>
      {stats.map((s) => (
        <div className={styles.item} key={s.key}>
          {/* Valeur (chiffre) */}
          <span className={styles.value}>{t(`stats.${s.key}.value`)}</span>
          {/* Label */}
          <span className={styles.label}>{t(`stats.${s.key}.label`)}</span>
        </div>
      ))}
    </div>
  )
}