import { Footer, Header } from './components/Layout'
import AboutSection from './components/sections/About'
import SkillsSection from './components/sections/Skills'
import ProjectsSection from './components/sections/Projects'
import ContactSection from './components/sections/Contact'

function App () {
  return (
    <>
      <Header />
      <main>
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
