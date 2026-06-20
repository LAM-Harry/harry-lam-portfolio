import { ReactNode } from 'react'

// Props du composant Section
type SectionProps = {
  number: ReactNode
  title: string         
  children: ReactNode   
  className?: string    
}

// Composant Section générique réutilisable
export function Section({ number, title, children, className = '' }: SectionProps) {
  return (
    <section className={`section ${className}`}>
      <div className="container">
        {/* En-tête avec numéro, titre et ligne */}
        <div className="section-header">
          <span className="section-number">{number}</span>
          <span className="section-title">{title}</span>
          <div className="section-line" />
        </div>
        {/* Contenu de la section */}
        {children}
      </div>
    </section>
  )
}
