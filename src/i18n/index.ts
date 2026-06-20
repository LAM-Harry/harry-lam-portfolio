import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

// Configuration de i18n
i18n
  // Chargement des fichiers de traduction via HTTP
  .use(Backend)
  // Détection automatique de la langue du navigateur
  .use(LanguageDetector)
  // Intégration avec React
  .use(initReactI18next)
  // Initialisation
  .init({
    // Langue par défaut si la langue détectée n'est pas supportée
    fallbackLng: 'fr',
    // Mode debug - affiche des logs dans la console
    debug: true,
    // Configuration du chargement des fichiers
    backend: {
      // Chemin vers les fichiers de traduction
      // {{lng}} sera remplacé par 'fr' ou 'en'
      loadPath: '/src/shared/locales/translation/{{lng}}.json',
    },
    // Évite les problèmes d'échappement avec React
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n