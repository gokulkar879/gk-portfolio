import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { 
  AiOutlineHome, 
  AiOutlineContacts, 
  AiOutlineFundProjectionScreen, 
  AiFillStar } from 'react-icons/ai'

function Navbar() {
  const handleClick = (ind) => {
    let list_items = document.querySelectorAll(".navbar__item");
    console.log("ppp");
    list_items.forEach(list => {
      list.classList.remove("active")
    })

    list_items[ind].classList.add("active")
  }



  useEffect(() => {
     const container = document.querySelector(".navbar__container")
     let l1 = container.addEventListener("mouseenter", () => {
      container.classList.add("active")
     })
     let l2 = container.addEventListener("mouseleave", () => {
      container.classList.remove("active")
     })
     return () => {
      window.removeEventListener("mouseenter", l1);
      window.removeEventListener("mouseleave", l2);
     }
  }, [])

  return (
    <div className='navbar__container'>
            <ul className='navbar__list'>
                <li className='navbar__item active' onClick={() => handleClick(0)}>
                  <Link to="/" className='link'>
                    <AiOutlineHome className='icon'/>
                    <p>Home</p>
                  </Link>
                  </li>
                <li className='navbar__item'  onClick={() => handleClick(1)}>
                  <Link to="/skills" className='link'>
                    <AiFillStar className='icon'/>
                    <p>Skills</p>
                  </Link>
                </li>
                <li className='navbar__item'  onClick={() => handleClick(2)}>
                  <Link to="/projects" className='link'>
                    <AiOutlineFundProjectionScreen className='icon'/>
                    <p>Projects</p>
                  </Link>
                </li>
                <li className='navbar__item'  onClick={() => handleClick(3)}>
                  <Link to="/contact" className='link'>
                    <AiOutlineContacts className='icon'/>
                    <p>Contact</p>
                  </Link>
                </li>
            </ul>
    </div>
  )
}

export default Navbar