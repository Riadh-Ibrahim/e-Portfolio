import React, { useState } from 'react';
import './navbar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll'
import Menu from '../../assets/menu.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return( 
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <Link to='intro' spy={true} smooth={true} duration={50} class="desktopMenuListItem">Home</Link>
                <Link to='services' spy={true} smooth={true} duration={50} class="desktopMenuListItem">About</Link>
                <Link to='skills' spy={true} smooth={true} duration={50} class="desktopMenuListItem">Skills</Link>
                <Link to='projects' spy={true} smooth={true} duration={50} class="desktopMenuListItem">Portfolio</Link>
            </div>
            <button class="desktopMenuBtn" onClick={()=> {
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contactImg} alt="Menu" class="desktopMenuimg"/>Contact Me</button>
        </nav>
    )
}

export default Navbar
