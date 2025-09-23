import React from 'react';
import './experience.css';
import calgraLogo from '../../assets/calgra.png';
import macroitLogo from '../../assets/macroit.png';
import talanLogo from '../../assets/talan.jpg';

const experienceData = [
    {
        title: 'AI Developer',
        company: 'Calgra Group',
        location: 'Edinburgh, UK (Remote)',
        period: 'Aug 2025 – Present',
        logo: calgraLogo,
        responsibilities: [
            'Developed AI-driven solutions to optimize business processes using machine learning.',
            'Designed scalable AI pipelines for real-time data processing.'
        ]
    },
    {
        title: 'AI Intern',
        company: 'Talan - Tunisie',
        location: 'Tunis',
        period: 'Jun 2025 – Jul 2025',
        logo: talanLogo,
        responsibilities: [
            'Built AI pipeline for marketing, integrating predictive models for customer behavior.',
            'Pitched innovative AI solutions, enhancing team strategies.'
        ]
    },
    {
        title: 'Software Development Intern',
        company: 'Macro-it.com',
        location: 'Tunis',
        period: 'Jul 2024 – Sep 2024',
        logo: macroitLogo,
        responsibilities: [
            'Created "EVE-BOOK", a web-based VM reservation interface.',
            'Automated EVE-NG lab setup using Ansible for efficient SSH access.'
        ]
    }
];

const Experience = () => {
    return (
        <div className="experience-container" id='experience'>
            <h2 className="experience-title">Professional Experience</h2>
            <p className="experience-subtitle">Building innovative AI solutions across diverse industries and domains</p>
            <div className="experience-timeline">
                {experienceData.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <div className="experience-header">
                            <div className="company-logo">
                                <img src={exp.logo} alt={`${exp.company} logo`} />
                            </div>
                            <div className="experience-details">
                                <h3 className="job-title">{exp.title}</h3>
                                <h4 className="company-name">{exp.company}</h4>
                                <div className="job-meta">
                                    <span className="location">
                                        <i className="fas fa-map-marker-alt"></i>
                                        {exp.location}
                                    </span>
                                    <span className="period">
                                        <i className="fas fa-calendar-alt"></i>
                                        {exp.period}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="experience-content">
                            <ul className="responsibilities">
                                {exp.responsibilities.map((item, idx) => (
                                    <li key={idx}>
                                        <i className="fas fa-chevron-right"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
