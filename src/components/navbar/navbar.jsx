import React from 'react'
import './navbar.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { List } from 'phosphor-react'
import { InstagramLogo } from 'phosphor-react'
import { ShoppingCart } from 'phosphor-react'

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)


    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
  return (
    <nav className="navbar">
            <div className="container-nav">
                <div className="logo">
                    <h1>ZephyrGPT</h1>
                    
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <List size={40} color='white' />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="/discover">Discover</NavLink>
                        </li>
                        
                        <li>
                        <NavLink onClick={handleShowNavbar} to="/libraries">Libraries</NavLink>

                        </li>
                        <li>
                        <NavLink onClick={handleShowNavbar} to="/contact">Live Demo</NavLink>

                            
                        </li>
                        <li>
                        <NavLink onClick={handleShowNavbar} to="/contact">Log In</NavLink>

                            
                        </li>
                        <li>
                        <NavLink className='nav-sign' onClick={handleShowNavbar} to="/contact">Sign Up</NavLink>

                            
                        </li>
                    
                    </ul>
                </div>
            </div>
        </nav>

    /** 
    <div className='navbar'>
      <li>
        <a className='nav-title' href="">ZephyrGPT</a>
        <a href="">Home</a>
        <a href="">What Is ZephyrGPT</a>
        <a href="">OpenAI</a>
        <a href="">Case Studies</a>
        <a href="">Library</a>
      </li>
      <a href="#" className='toggle-button'>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </a>
      <li>
        <a href="">Sign In</a>
        <a className='nav-sign' href="">Sign Up</a>
      </li>
    </div>
    */
  )
}

export default Navbar
