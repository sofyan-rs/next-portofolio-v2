import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProjectContainer from '@/components/Projects/ProjectContainer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectContainer />
      </main>
      <Footer />
    </>
  )
}
