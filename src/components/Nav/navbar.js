import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {GiHamburgerMenu } from 'react-icons/gi'
import '../../style/navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <>
    <nav className="navbar">
      <div className="container">
        <div className="logo">
         <a href='/'><h1 className="logo-item">AWS</h1></a>
        </div>
        <div className='image-log-container'>
          <NavLink to="/"><img className='image-logo' src='https://media.istockphoto.com/id/1168757141/vector/gold-trophy-with-the-name-plate-of-the-winner-of-the-competition.jpg?s=612x612&w=0&k=20&c=ljsP4p0yuJnh4f5jE2VwXfjs96CC0x4zj8CHUoMo39E=' alt='login' /></NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu  fontSize="1.5em"/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink className='login-button2' to="/profile">Sign-Up</NavLink>
            </li>
            <li >
              <NavLink className='login-button' to="/profile">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar