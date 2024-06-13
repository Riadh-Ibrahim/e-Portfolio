import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenu">
                <Link to='intro' spy={true} smooth={true} duration={50} className="desktopMenuListItem">Home</Link>
                <Link to='services' spy={true} smooth={true} duration={50} className="desktopMenuListItem">About</Link>
                <Link to='skills' spy={true} smooth={true} duration={50} className="desktopMenuListItem">Skills</Link>
                <Link to='projects' spy={true} smooth={true} duration={50} className="desktopMenuListItem">Portfolio</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contactImg} alt="Contact" className="desktopMenuimg" />Contact Me</button>
            
            
            <i className="fas fa-bars fa-2x mobMenu" onClick={() => setShowMenu(!showMenu)}></i>
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link to='intro' spy={true} smooth={true} offset={-100} duration={50} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link to='services' spy={true} smooth={true} offset={-50} duration={50} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link to='skills' spy={true} smooth={true} offset={-50} duration={50} className="listItem" onClick={() => setShowMenu(false)}>Skills</Link>
                <Link to='projects' spy={true} smooth={true} offset={-50} duration={50} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link to='contact' spy={true} smooth={true} offset={-50} duration={50} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
