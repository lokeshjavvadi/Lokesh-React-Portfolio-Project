import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Projects from './components/Project'
import Experience from './components/Experince'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
       <About />
      <Skills />
      <Projects />
      <Experience />
     
      <Contact />
      
    </>
  )
}

export default App
