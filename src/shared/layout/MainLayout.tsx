import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './MainLayout.module.css'

// Props du layout
type MainLayoutProps = {
  children: ReactNode
}

// Layout principal - contient Header, contenu et Footer
export function MainLayout({ children }: MainLayoutProps) {
  const { i18n, t } = useTranslation()
  const currentLang = i18n.language.split('-')[0] 

  // Changer la langue (FR ↔ EN)
  const toggleLanguage = () => {
    const nextLang = currentLang === 'fr' ? 'en' : 'fr'
    i18n.changeLanguage(nextLang)
  }

  return (
    <>
      {/* Effet de bruit de fond */}
      <div className="noise-overlay" aria-hidden="true" />
      
      {/* Header */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            {/* Logo */}
            <a href="/" className={styles.logo}>HL</a>
            {/* Bouton de changement de langue */}
            <button className={styles.langBtn} onClick={toggleLanguage}>
              {currentLang === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
        </div>
      </header>
      
      {/* Contenu principal */}
      <main>{children}</main>
      
      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.bottom}>
            <p className={styles.copyright}>
              {t('copyright', { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}