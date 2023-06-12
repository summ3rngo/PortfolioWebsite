import React from 'react'
import { BiHomeAlt, BiUser} from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { Link } from 'react-scroll'
import './NavBarSmall.css'

const NavBarSmall = () => {
  return (
   <nav className='navbar-small'> 
        <div className='container-nav'>
        <Link activeClass='active' duration={100} smooth spy to='home'><BiHomeAlt style={{width: '30px', height: '30px', cursor: 'pointer'}} /></Link>
        <Link activeClass='active' duration={100} smooth spy to='about'><BiUser style={{width: '30px', height: '30px', cursor: 'pointer'}} /></Link>
        <Link activeClass='active' duration={100} smooth spy to='skills'><BsClipboardData style={{width: '30px', height: '30px', cursor: 'pointer'}} /></Link>
        <Link activeClass='active' duration={100} smooth spy to='projects'><BsBriefcase style={{width: '30px', height: '30px', cursor: 'pointer'}} /></Link>
        <Link activeClass='active' duration={100} smooth spy to='contact'><BsChatSquare style={{width: '30px', height: '30px', cursor: 'pointer'}} /></Link>
        </div>
   </nav>
  )
}

export default NavBarSmall