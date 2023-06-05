import React from 'react'
import './Nav.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-scroll'



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
      console.log(value);
      
    }

    return (
        <nav id="navbar" className="nav-bar">
          <div className="navbar-left">
            {/* Logo */}
          <Link activeClass="active" smooth duration={100}spy to="home">
            <img className='logo' style={{cursor: 'pointer'}} onClick={() => updateActiveLink('home')} src={logo} alt='logo'></img>
            </Link>
          </div>
          <div className="navbar-center">
            {/* Links */}
            <ul>
              <li><Link  activeClass="active" smooth duration={100} spy to="about" className={active === 'navbar-link about' ? 'active' : 'navbar-link'} onClick={() => updateActiveLink('about')}>About</Link></li>
              <li><Link  activeClass="active" smooth duration={100} spy to="skills" className={active === 'navbar-link skills' ? 'active' : 'navbar-link'} onClick={() => updateActiveLink('skills')}>Skills</Link></li>
              <li><Link  activeClass="active" smooth duration={100} spy to="projects" className={active === 'navbar-link projects' ? 'active' : 'navbar-link'}  onClick={() => updateActiveLink('projects')}>Projects</Link></li>
            </ul>
          </div>
            <div className="navbar-right">
            {/* Social media logos */}
            <AiFillLinkedin style={{fontSize: '40px', marginRight: '10px', color: linkedIn ? 'var(--primary-color' : 'white', cursor: 'pointer'}} 
              onMouseEnter={linkedInHover} onMouseLeave={linkedInDefault}  />
            <AiFillGithub style={{fontSize: '40px', marginRight: '10px', color: github ? 'var(--primary-color' : 'white', cursor: 'pointer'}} 
              onMouseEnter={githubHover} onMouseLeave={githubDefault} />
            <Link className='btn' activeClass="active" smooth duration={100} spy to="contact" onClick={() => updateActiveLink('contact')}>Contact Me</Link>
            
        </div>
    </nav>
    );
}

export default Nav