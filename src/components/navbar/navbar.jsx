import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <li>
        <a className='nav-title' href="">ZephyrGPT</a>
        <a href="">Home</a>
        <a href="">What Is ZephyrGPT</a>
        <a href="">OpenAI</a>
        <a href="">Case Studies</a>
        <a href="">Library</a>
      </li>
      <li>
        <a href="">Sign In</a>
        <a className='nav-sign' href="">Sign Up</a>
      </li>



    </div>
  )
}

export default Navbar
