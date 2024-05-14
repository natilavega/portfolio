import { Footer, Header } from './components/Layout'
import AboutSection from './components/sections/About'
import ContactSection from './components/sections/Contact'
import HeroSection from './components/sections/Hero'
import ProjectsSection from './components/sections/Projects'
import SkillsSection from './components/sections/Skills'

function App () {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
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
