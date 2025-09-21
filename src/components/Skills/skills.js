import React from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHtml5, 
    faCss3Alt, 
    faJs, 
    faReact, 
    faNodeJs, 
    faPython,
    faDocker,
    faAws
} from '@fortawesome/free-brands-svg-icons';
import { 
    faDatabase, 
    faBrain, 
    faCloud, 
    faChartLine, 
    faCog, 
    faServer,
    faCode,
    faRobot
} from '@fortawesome/free-solid-svg-icons';

const skillsData = [
    {
        category: 'AI & Machine Learning',
        skills: [
            { name: 'LangGraph & LangChain', level: 'Advanced', icon: faBrain },
            { name: 'PyTorch & TensorFlow', level: 'Advanced', icon: faRobot },
            { name: 'ChromaDB & YOLO', level: 'Advanced', icon: faBrain },
            { name: 'Pandas & NumPy', level: 'Advanced', icon: faChartLine },
            { name: 'Scikit-learn & LSTM', level: 'Advanced', icon: faRobot },
            { name: 'CRISP-DM Methodology', level: 'Intermediate', icon: faCog },
        ],
    },
    {
        category: 'Web Development',
        skills: [
            { name: 'JavaScript/TypeScript', level: 'Advanced', icon: faJs },
            { name: 'React & Next.js', level: 'Advanced', icon: faReact },
            { name: 'Node.js & Express.js', level: 'Advanced', icon: faNodeJs },
            { name: 'NestJS Framework', level: 'Intermediate', icon: faNodeJs },
            { name: 'HTML & CSS', level: 'Advanced', icon: faHtml5 },
            { name: 'MySQL & PostgreSQL', level: 'Advanced', icon: faDatabase },
        ],
    },
    {
        category: 'Cloud & DevOps',
        skills: [
            { name: 'AWS (Certified)', level: 'Advanced', icon: faAws },
            { name: 'Docker & Kubernetes', level: 'Advanced', icon: faDocker },
            { name: 'Jenkins & GitHub Actions', level: 'Intermediate', icon: faCog },
            { name: 'Grafana & Prometheus', level: 'Intermediate', icon: faChartLine },
            { name: 'InfluxDB & Telegraf', level: 'Intermediate', icon: faDatabase },
            { name: 'MongoDB Database', level: 'Advanced', icon: faDatabase },
        ],
    },
];

const Skills = () => {
    return (
        <div className="skills-container" id='skills'>
            <h2 className="skills-title">Technical Expertise</h2>
            <p className="skills-subtitle">Professional competencies spanning AI/ML, Cloud Architecture, and Full-Stack Development</p>
            <div className="skills-content">
                {skillsData.map((category, index) => (
                    <div key={index} className="skills-category-box">
                        <h3>{category.category}</h3>
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
