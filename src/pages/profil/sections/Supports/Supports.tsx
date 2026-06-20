import { useTranslation } from 'react-i18next'
import { supports } from '../../../../shared/data/cv/cv.data'
import { Section } from '../../../ui/Section'
import styles from './Supports.module.css'

// Section Supports informatiques
export function Supports() {
  const { t } = useTranslation()

  // Mapping des catégories traduites
  const categoryMap: Record<string, string> = {
    'IDE': t('supports.ide'),
    'Bases de données': t('supports.databases'),
    'Machines virtuelles & Conteneurs': t('supports.virtualization'),
    'Gestion de version': t('supports.versioning'),
  }

  return (
    <Section number="05" title={t('sections.supports')}>
      <div className={styles.grid}>
        {supports.map((category) => (
          <div className={styles.card} key={category.category}>
            {/* Nom de la catégorie */}
            <p className={styles.category}>{categoryMap[category.category] || category.category}</p>
            {/* Liste des outils */}
            <ul className={styles.list}>
              {category.items.map((item) => (
                <li className={styles.item} key={item}>
                  <span className={styles.bullet}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}