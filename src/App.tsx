import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './shared/styles/globals.css'
import { MainLayout } from './shared/layout/MainLayout'
import { Hero, StatsBar, Experience, Projects, Skills, Methodologies, Supports, Formation, LQH } from './pages'
import { Projects as ProjectsPage } from './pages/projects/Projects' 

// Composant principal de l'application
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page Accueil */}
        <Route path="/" element={
          <MainLayout>
            <Hero />          {/* Bannière principale avec nom et présentation */}
            <StatsBar />      {/* Statistiques (stages, formation, technologies) */}
            <Experience />    {/* Expériences professionnelles */}
            <Projects />      {/* Projets académiques (aperçu) */}
            <Skills />        {/* Stack technique */}
            <Methodologies /> {/* Méthodes de gestion de projet (Scrum, Kanban) */}
            <Supports />      {/* Supports informatiques (IDE, BDD, etc.) */}
            <Formation />     {/* Formations */}
            <LQH />           {/* Langues, Qualités & Centres d'intérêt */}
          </MainLayout>
        } />

        {/* Page Projets */}
        <Route path="/projets" element={
          <MainLayout>
            <ProjectsPage />  {/* Tous les projets en détail */}
          </MainLayout>
        } />
      </Routes>
    </BrowserRouter>
  )
}