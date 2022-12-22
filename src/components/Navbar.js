import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  const handleClick = e => {
    const hamburger = document.querySelector(".hamburger")
    const navMenu = document.querySelector(".navbar__section")
    navMenu.classList.toggle("active")
  }
  return (
    <div className='navbar__container'>
        <nav className='navbar__section'>
            <ul className='navbar__list'>
                <li className='navbar__item'><Link to="/">Home</Link></li>
                <li className='navbar__item'><Link to="/skills">Skills</Link></li>
                <li className='navbar__item'><Link to="/projects">Projects</Link></li>
                <li className='navbar__item'><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
       <div className='hamburger' onClick={handleClick}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
       </div>
    </div>
  )
}

export default Navbar