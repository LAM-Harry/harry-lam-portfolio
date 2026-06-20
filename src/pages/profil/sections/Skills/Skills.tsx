import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { skills } from '../../../../shared/data/cv/cv.data'
import { Section } from '../../../ui/Section'
import styles from './Skills.module.css'

// Section Stack technique
export function Skills() {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  // Observer pour détecter quand la section est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Fonction pour traduire les noms de compétences
  const translateSkillName = (name: string) => {
    // Si c'est une clé de traduction, la traduire
    if (name === 'langageC') {
      return t('skills.langageC')
    }
    // Sinon, garder le nom tel quel
    return name
  }

  // Grouper les compétences par catégorie
  const groupedSkills = skills.reduce<Record<string, string[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill.name)
    return acc
  }, {})

  return (
    <Section number="03" title={t('sections.skills')}>
      <div className={styles.grid} ref={ref}>
        {Object.entries(groupedSkills).map(([category, names]) => (
          <div className={styles.cell} key={category}>
            {/* Catégorie */}
            <span className={styles.cat}>{t(`categories.${category}`) || category}</span>
            {/* Compétences */}
            {names.map((name) => (
              <span className={styles.item} key={name}>
                {translateSkillName(name)}
              </span>
            ))}
          </div>
        ))}
      </div>
    </Section>
  )
}