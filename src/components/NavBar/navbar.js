import React from 'react';
import './navbar.css'
import logo from '../../assests/logo.png'
import contactImg from '../../assests/contact.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    return( 
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <Link class="desktopMenuListItem">Home</Link>
                <Link class="desktopMenuListItem">About</Link>
                <Link class="desktopMenuListItem">Portfolio</Link>
            </div>
            <button class="desktopMenuBtn">
                <img src={contactImg} alt="" class="desktopMenuimg"/>Contact Me
            </button>
        </nav>
    )
}

export default Navbar
