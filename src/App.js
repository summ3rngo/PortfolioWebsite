import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Nav from './components/header/Nav'
import logo from './assets/logo.png'
import headerimg from './assets/image-placeholder.jpg'


import React from 'react'


const App = () => {
  return (
    <>
    <Nav logo={logo} />
    <Header headerimg={headerimg}/>
    <About />
    <Skills />
    <Projects />
    <Contact />
    </>
  )
}

export default App;
