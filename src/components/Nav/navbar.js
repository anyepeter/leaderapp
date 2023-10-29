import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {GiHamburgerMenu } from 'react-icons/gi'
import '../../style/navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const [userAttributes, setUserAttributes] = useState([]);

  useEffect(() => {
    try {
      const storedValue = localStorage.getItem('CognitoIdentityServiceProvider.6q1kmchsjmm48so6897q5qv81j.541f8bc6-e61c-42a6-94b7-fa51c8c16c82.userData'); // Replace 'myKey' with your desired key
      if (storedValue !== null) {
        const parsedValue = JSON.parse(storedValue);
        if (parsedValue && Array.isArray(parsedValue.UserAttributes)) {
          setUserAttributes(parsedValue.UserAttributes);
        }
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload();
  };


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
              {
                userAttributes.length === 0? <NavLink className='login-button2' to="/profile">Sign-Up</NavLink> : <img className='profile-image' src='https://cdn.pixabay.com/photo/2023/10/19/04/24/ai-generated-8325514_640.jpg' />
              }
             
            </li>
            <li >
              {
                userAttributes.length === 0? <NavLink className='login-button' to="/profile">Login</NavLink> : <button onClick={handleLogout} className='login-button'>Logout</button>
              }
             
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar