import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Nav from './components/header/Nav'
import logo from './assets/logo.png'
import headerimg from './assets/image-placeholder.jpg'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import React from 'react'
import NavBarSmall from './components/header/NavBarSmall'


const App = () => {
  const [active, setactive] = useState('home');
  const updateActiveLink = (value) => {

    setactive(value);
    console.log(value);
    
  }

  const isSmallScreen = useMediaQuery({ maxWidth: 991 });
  
  return (
    <div id='overall-container'>
      {isSmallScreen ? <NavBarSmall /> : <Nav logo={logo} updateActiveLink={updateActiveLink} active={active} />}
    <Header  updateActiveLink={updateActiveLink} active={active} headerimg={headerimg}/>
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}

export default App;
