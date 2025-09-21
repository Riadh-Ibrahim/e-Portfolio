import React, { useState, useEffect, useCallback } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const navLinks = [
  { to: 'intro', label: 'Home', offset: -100 },
  { to: 'services', label: 'About', offset: -50 },
  { to: 'skills', label: 'Skills', offset: -50 },
  { to: 'projects', label: 'Portfolio', offset: -50 },
  { to: 'contact', label: 'Contact', offset: -50 },
];

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = useCallback(() => setShowMenu(prev => !prev), []);

    // Lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = showMenu ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [showMenu]);

    // Close on ESC
    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape') setShowMenu(false);
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    return (
        <nav className='navbar' role="navigation" aria-label="Main Navigation">
            <div className="brand-wrapper">
                <div className="brand-text">Riadh <span>Ibrahim</span></div>
                <div className="brand-tagline">AI • ML • Cloud</div>
                <div className="brand-accent"></div>
            </div>
            
            {/* Desktop Menu */}
            <div className="desktopMenu">
                {navLinks.slice(0,4).map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={link.offset}
                        activeClass="activeLink"
                        className="desktopMenuListItem"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Contact Button (desktop) */}
            <button
                className="desktopMenuBtn"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Scroll to contact section"
            >
                <i className="fas fa-envelope" aria-hidden="true"></i>
                Contact Me
            </button>

            {/* Mobile Hamburger */}
            <button
                className={`hamburger ${showMenu ? 'open' : ''}`}
                aria-label="Toggle navigation menu"
                aria-controls="mobile-menu"
                aria-expanded={showMenu}
                onClick={toggleMenu}
            >
                <span></span><span></span><span></span>
            </button>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`navMenu ${showMenu ? 'open' : ''}`}
                role="menu"
                aria-hidden={!showMenu}
            >
                {navLinks.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={link.offset}
                        activeClass="activeLink"
                        className="listItem"
                        role="menuitem"
                        tabIndex={showMenu ? 0 : -1}
                        onClick={() => setShowMenu(false)}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
