import { useTranslation } from 'react-i18next'
import { meta } from '../../../../shared/data/cv/cv.data'
import cvFR from '../../../../shared/docs/LAM_CV_FR.pdf'
import cvEN from '../../../../shared/docs/LAM_CV_EN.pdf'
import styles from './Hero.module.css'

// Section Hero (bannière principale)
export function Hero() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language.split('-')[0]

  // Sélection du PDF selon la langue
  const pdfFile = currentLang === 'fr' ? cvFR : cvEN

  return (
    <section className={styles.hero}>
      {/* Grand nombre en arrière-plan */}
      <span className={styles.bgNumber} aria-hidden="true">{meta.number}</span>

      <div className={`container ${styles.content}`}>
        {/* Badge avec point clignotant */}
        <div className={styles.badge}>
          <span className={styles.dot} />
          {t('hero.badge')}
        </div>

        {/* Nom */}
        <h1 className={styles.name}>
          <span className={styles.nameLine1}>{t('hero.name')}</span>
          <br />
          <span className={styles.nameLine2}>
            {t('hero.surname')}
          </span>
        </h1>

        {/* Description */}
        <p className={styles.description}>{t('hero.description')}</p>

        {/* Boutons CTA */}
        <div className={styles.links}>
          {/* Voir tous mes projets */}
          <a className="btn primary" href="/projets">
            <i className="ti ti-folder" aria-hidden="true" />
            {t('hero.viewProjects')}
          </a>
          {/* Me contacter */}
          <a className="btn" href={`mailto:${meta.email}`}>
            <i className="ti ti-mail" aria-hidden="true" />
            {t('hero.contact')}
          </a>
          {/* Lien GitHub */}
          <a className="btn" href={meta.github} target="_blank" rel="noreferrer">
            <i className="ti ti-brand-github" aria-hidden="true" />
            {t('hero.github')}
          </a>
          {/* Lien Linkedin */}
          <a className="btn" href={meta.linkedin} target="_blank" rel="noreferrer">
            <i className="ti ti-brand-linkedin" aria-hidden="true" />
            {t('hero.linkedin')}
          </a>
          {/* Télécharger mon CV */}
          <a className="btn" href={pdfFile} download>
            <i className="ti ti-download" aria-hidden="true" />
            {t('hero.download')}
          </a>
        </div>
      </div>
    </section>
  )
}
