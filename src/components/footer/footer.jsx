import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <h1>Do You Want To Get Access Before Everyone Else</h1>
        <button>Request Early Access</button>
        <div className='footer-grid'>
            <div className='footer-grid-item'>
                <h2>Company</h2>
                <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Careers</li>
                </ul>
            </div>
            <div className='footer-grid-item'>
                <h2>Support</h2>
                <ul>
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-grid-item'>
                <h2>Product</h2>
                <ul>
                <li>Features</li>
                <li>Integrations</li>
                <li>FAQ</li>
                </ul>
            </div>
            <div className='footer-grid-item'>
                <h2>Connect</h2>
                <ul>
                <li>Contact Us</li>
                <li>Newsletter</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
                </ul>
            </div>
        </div>
        
      
    </div>
  )
}

export default Footer
