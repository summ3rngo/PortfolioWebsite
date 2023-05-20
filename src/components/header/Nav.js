import React from 'react'
import './Nav.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { useState } from 'react'


const Nav = ({logo}) => {
    const [github, setGithub] = useState(false);
    const [linkedIn, setLinkedIn] = useState(false);
    const [active, setactive] = useState('home');

    const githubHover = () => {
      setGithub(true);
    }

    const githubDefault = () => {
      setGithub(false);
    }

    const linkedInHover = () => {
      setLinkedIn(true);
    }

    const linkedInDefault = () => {
      setLinkedIn(false);
    }

    const updateActiveLink = (value) => {

      setactive(value);
    }

    return (
        <nav className="navbar">
          <div className="navbar-left">
            {/* Logo */}
            <img className='logo' style={{cursor: 'pointer'}} onClick={() => updateActiveLink('home')} src={logo} alt='logo'></img>
          </div>
          <div className="navbar-center">
            {/* Links */}
            <ul>
              <li><a href="#about" className={active === 'about' ? 'active' : ''} onClick={() => updateActiveLink('about')}>About</a></li>
              <li><a href="#skills" className={active === 'skills' ? 'active' : ''} onClick={() => updateActiveLink('skills')}>Skills</a></li>
              <li><a href="#projects" className={active === 'projects' ? 'active' : ''}  onClick={() => updateActiveLink('projects')}>Projects</a></li>
            </ul>
          </div>
            <div className="navbar-right">
            {/* Social media logos */}
            <AiFillLinkedin style={{fontSize: '40px', marginRight: '10px', color: linkedIn ? 'var(--primary-color' : 'white', cursor: 'pointer'}} 
              onMouseEnter={linkedInHover} onMouseLeave={linkedInDefault}  />
            <AiFillGithub style={{fontSize: '40px', marginRight: '10px', color: github ? 'var(--primary-color' : 'white', cursor: 'pointer'}} 
              onMouseEnter={githubHover} onMouseLeave={githubDefault} />
            <a className='btn' href='#contact' onClick={() => updateActiveLink('contact')}>Contact Me</a>
            
        </div>
    </nav>
    );
}

export default Nav