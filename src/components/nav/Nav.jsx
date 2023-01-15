import React from 'react'
import './nav.css'

const Nav = () => {
    return (
        <nav className='nav'>
            <h3>Jupit.</h3>
            <ul>
                <li>About Us</li>
                <li>Product</li>
                <li>Resources</li>
                <li>Contact</li>
            </ul>
            <div className='nav_btn'>
                <button className='btn_primary btn'>Sign In</button>
                <button className='btn'>Register</button>
            </div>
        </nav>
    )
}

export default Nav