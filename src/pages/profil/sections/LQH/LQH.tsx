import { useTranslation } from 'react-i18next'
import { languages, qualities } from '../../../../shared/data/cv/cv.data'
import { Section } from '../../../ui/Section'
import { Plane, Gamepad2, Trophy } from 'lucide-react'
import Flag from 'react-flagkit'
import styles from './LQH.module.css'

// Valeurs directes des hobbies
const hobbies = [
  { name: 'Football', icon: Trophy },
  { name: 'Voyages', icon: Plane },
  { name: 'Jeux vidéo', icon: Gamepad2 },
]

// Section Langues, Qualités & Centres d'intérêt
export function LQH() {
  const { t } = useTranslation()

  const getCountryCode = (lang: string) => {
    const codes: Record<string, string> = {
      'Français': 'FR',
      'Vietnamien': 'VN',
      'Anglais': 'GB',
      'Espagnol': 'ES',
    }
    return codes[lang] || 'FR'
  }

  // Mapping des langues traduites
  const langMap: Record<string, string> = {
    'Français': t('lqh.french'),
    'Vietnamien': t('lqh.vietnamese'),
    'Anglais': t('lqh.english'),
    'Espagnol': t('lqh.spanish'),
  }

  const levelMap: Record<string, string> = {
    'Langue maternelle': t('lqh.native'),
    'B2 — Intermédiaire': t('lqh.levelB2'),
    'A2+ — Scolaire': t('lqh.levelA2'),
  }

  // Récupérer les qualités traduites avec fallback
  const qualitiesTranslated = t('lqh.qualitiesList', { returnObjects: true })
  const qualitiesArray = Array.isArray(qualitiesTranslated) 
    ? qualitiesTranslated 
    : qualities 

  // Récupérer les hobbies traduits avec fallback
  const hobbiesTranslated = t('lqh.hobbiesList', { returnObjects: true })
  const hobbiesArray = Array.isArray(hobbiesTranslated) 
    ? hobbiesTranslated 
    : hobbies.map(h => h.name) 

  return (
    <Section number="08" title={t('sections.lqh')}>
      <div className={styles.row}>
        {/* Langues */}
        <div>
          <p className={styles.blockTitle}>{t('lqh.languages')}</p>
          <div className={styles.langRow}>
            {languages.map((l) => (
              <div className={styles.langItem} key={l.name}>
                <p className={styles.langName}>
                  <span className={styles.flag}>
                    <Flag country={getCountryCode(l.name)} size={20} />
                  </span>
                  {langMap[l.name] || l.name}
                </p>
                <p className={styles.langLevel}>{levelMap[l.level] || l.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Qualités */}
        <div>
          <p className={styles.blockTitle}>{t('lqh.qualities')}</p>
          <div className="tags">
            {qualitiesArray.map((q: string) => (
              <span className="tag" key={q}>{q}</span>
            ))}
          </div>
        </div>

        {/* Centres d'intérêt */}
        <div className={styles.fullWidth}>
          <p className={styles.blockTitle}>{t('lqh.hobbies')}</p>
          <div className={styles.hobbyGrid}>
            {hobbies.map((item, index) => {
              const Icon = item.icon
              return (
                <div className={styles.hobbyCard} key={item.name}>
                  <Icon className={styles.hobbyIcon} size={20} />
                  <span className={styles.hobbyName}>
                    {hobbiesArray[index] || item.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}