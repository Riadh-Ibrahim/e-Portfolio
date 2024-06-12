import React from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHtml5, 
    faCss3Alt, 
    faJs, 
    faReact, 
    faBootstrap, 
    faNodeJs, 
    faPhp 
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const skillsData = [
    {
        category: 'Frontend Development',
        skills: [
            { name: 'HTML', level: 'Advanced', icon: faHtml5 },
            { name: 'CSS', level: 'Advanced', icon: faCss3Alt },
            { name: 'JavaScript', level: 'Intermediate', icon: faJs },
            { name: 'Tailwind', level: 'Intermediate', icon: faCss3Alt },
            { name: 'BootStrap', level: 'Intermediate', icon: faBootstrap },
            { name: 'React', level: 'Intermediate', icon: faReact },
        ],
    },
    {
        category: 'Backend Development',
        skills: [
            { name: 'MySQL', level: 'Intermediate', icon: faDatabase },
            { name: 'Node Js', level: 'Advanced', icon: faNodeJs },
            { name: 'Express Js', level: 'Advanced', icon: faNodeJs },
            { name: 'MongoDB', level: 'Intermediate', icon: faDatabase },
            { name: 'Python', level: 'Intermediate', icon: faDatabase },
            { name: 'PHP', level: 'Basic', icon: faPhp },
        ],
    },
];

const Skills = () => {
    return (
        <div className="skills-container" id='skills'>
            <h2 className="skills-title">Skills</h2>
            <p className="skills-subtitle">Skill Set and Competency</p>
            <div className="skills-content">
                {skillsData.map((category, index) => (
                    <div key={index} className="skills-category-box">
                        <h3>{category.category}</h3>
                        <br/>
                        <ul>
                            {category.skills.map((skill, idx) => (
                                <li key={idx} className="skill-item">
                                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-level">{skill.level}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
