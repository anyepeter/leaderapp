import { useState } from 'react'
import { NavLink } from 'react-router-dom';
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
         <h1>AWS</h1>
        </div>
        <div>
          <NavLink to="/">Reward</NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <h3>Here</h3>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/about">Sign-Up</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar