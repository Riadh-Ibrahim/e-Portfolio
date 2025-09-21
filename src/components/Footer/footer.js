import React from 'react';
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer" role="contentinfo">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-brand">
                        <h3>Riadh Ibrahim</h3>
                        <p>AI Developer & Engineer</p>
                        <div className="footer-badges">
                            <span className="badge">AWS Certified</span>
                            <span className="badge">ML Engineer</span>
                        </div>
                    </div>
                </div>
                
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <nav className="footer-nav">
                        <a href="#intro">Home</a>
                        <a href="#services">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Portfolio</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
                
                <div className="footer-section">
                    <h4>Professional</h4>
                    <div className="footer-links">
                        <a href="mailto:riadh.ibrahim@insat.ucar.tn" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-envelope"></i> Email
                        </a>
                        <a href="https://www.linkedin.com/in/riadh-ibrahim-850712240/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                        <a href="https://github.com/Riadh-Ibrahim" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                        <a href="https://www.credly.com/users/riadh-ibrahim.c8f5e4b4" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-certificate"></i> Certifications
                        </a>
                    </div>
                </div>
                
                <div className="footer-section">
                    <h4>Connect</h4>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/riadh-ibrahim-850712240/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Riadh-Ibrahim" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100009773322102" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="http://instagram.com/ibrahim.riyad_02" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; {currentYear} Riadh Ibrahim. All rights reserved.</p>
                    <p className="footer-location">
                        <i className="fas fa-map-marker-alt"></i>
                        Tunis, Tunisia
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
