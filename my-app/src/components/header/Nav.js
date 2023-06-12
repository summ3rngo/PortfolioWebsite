import React from 'react'
import './Nav.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-scroll'



const Nav = ({logo, updateActiveLink, active}) => {
    const [github, setGithub] = useState(false);
    const [linkedIn, setLinkedIn] = useState(false);
    

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
              <li><Link  activeClass="active" smooth duration={100} spy to="about" className='navbar-link' onClick={() => updateActiveLink('about')}>About</Link></li>
              <li><Link  activeClass="active" smooth duration={100} spy to="skills" className={active === 'skills' ? 'navbar-link  active' : 'navbar-link'} onClick={() => updateActiveLink('skills')}>Skills</Link></li>
              <li><Link  activeClass="active" smooth duration={100} spy to="projects" className={active === 'projects' ? 'navbar-link active' : 'navbar-link'}  onClick={() => updateActiveLink('projects')}>Projects</Link></li>
            </ul>
          </div>
            <div className="navbar-right">
            {/* Social media logos */}
            <a href='https://www.linkedin.com/in/summerlngo/' target='_blank'><AiFillLinkedin style={{fontSize: '40px', marginRight: '10px', color: linkedIn ? 'var(--primary-color' : 'white', cursor: 'pointer'}} 
              onMouseEnter={linkedInHover} onMouseLeave={linkedInDefault}  /></a>
            <a href='https://github.com/summ3rngo' target='_blank'><AiFillGithub style={{fontSize: '40px', marginRight: '10px', color: github ? 'var(--primary-color' : 'white', cursor: 'pointer'}} 
              onMouseEnter={githubHover} onMouseLeave={githubDefault} /></a>
            <Link id='btn-contact' className='btn' activeClass="active" smooth duration={100} spy to="contact" onClick={() => updateActiveLink('contact')}>Contact Me</Link>
            
        </div>
    </nav>
    );
}

export default Nav