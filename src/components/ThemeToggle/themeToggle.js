import React from 'react';
import './themeToggle.css';

const ThemeToggle = ({ isDark, toggleTheme }) => {
    return (
        <button 
            className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            <div className="toggle-track">
                <div className="toggle-thumb">
                    <i className={`fas ${isDark ? 'fa-moon' : 'fa-sun'}`}></i>
                </div>
            </div>
        </button>
    );
};

export default ThemeToggle;
