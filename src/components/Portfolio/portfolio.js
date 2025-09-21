import React from 'react';
import './portfolio.css';
import kyufiImg from '../../assets/kyufi.gif'
import entreprenetImg from '../../assets/entreprenet.png'
import schoolImg from '../../assets/erp.png'
import eveboookImg from '../../assets/evebook.png'

const Portfolio = () => {
    return (
        <section className="projects" id="projects">
            <h2 className="title">Featured Projects</h2>
            <p className="skills-subtitle">AI/ML research, cloud architecture, and enterprise solutions showcasing professional expertise</p>
            <div className="content">                
                <div className="project-card">
                    <div className="project-image">
                        <img src={schoolImg} alt='EcoLens AI Platform'/>
                    </div>
                    <div className="project-info">
                        <p className="project-category">
                            <strong>EcoLens - AI Content Generator</strong><br/>
                            AI-powered platform for generating text, images, and videos using <span className="project-tech-tag">Gemini</span> <span className="project-tech-tag">Hugging Face</span> <span className="project-tech-tag">Flux Dev</span> with automated LinkedIn sharing capabilities.
                        </p>
                        <strong className="project-title">
                            <h3>AI Content Platform (2025)</h3>
                            <a href="https://github.com/Riadh-Ibrahim/EcoLens" className="more-details">View Project</a>
                        </strong>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src={eveboookImg} alt='Enhanced RouteNet Research'/>
                    </div>
                    <div className="project-info">
                        <p className="project-category">
                            <strong>Enhanced RouteNet with Attention Layer</strong><br/>
                            Research project improving network performance prediction using attention mechanisms. <span className="project-tech-tag">PyTorch</span> <span className="project-tech-tag">TensorFlow</span> <span className="project-tech-tag">Optuna</span> <strong>Published Research Paper</strong> with significant accuracy improvements.
                        </p>
                        <strong className="project-title">
                            <h3>AI Research (2025)</h3>
                            <a href="https://github.com/Riadh-Ibrahim/Enhanced-Routenet-Model-with-Attention-Layer" className="more-details">View Research</a>
                        </strong>
                    </div>
                </div>
                
                <div className="project-card">
                    <div className="project-image">
                        <img src={entreprenetImg} alt='Serverless AWS Architecture'/>
                    </div>
                    <div className="project-info">
                        <p className="project-category">
                            <strong>Serverless REST API with AWS</strong><br/>
                            Production-ready serverless To-Do application using <span className="project-tech-tag">Lambda</span> <span className="project-tech-tag">API Gateway</span> <span className="project-tech-tag">DynamoDB</span> <span className="project-tech-tag">CloudFront</span> <span className="project-tech-tag">Cognito</span> for scalable cloud architecture.
                        </p>
                        <strong className="project-title">
                            <h3>Cloud Architecture (2024)</h3>
                            <a href="https://github.com/Riadh-Ibrahim/Serverless-REST-API-with-DynamoDB-and-API-Gateway" className="more-details">View Project</a>
                        </strong>
                    </div>
                </div>
                
                <div className="project-card">
                    <div className="project-image">
                        <img src={kyufiImg} alt='Healthcare Management System'/>
                    </div>
                    <div className="project-info">
                        <p className="project-category">
                            <strong>Nafis Healthcare Management System</strong><br/>
                            Comprehensive healthcare platform streamlining hospital operations with appointment scheduling, patient records, and role-based access. <span className="project-tech-tag">React</span> <span className="project-tech-tag">Node.js</span> <span className="project-tech-tag">MongoDB</span>
                        </p>
                        <strong className="project-title">
                            <h3>Healthcare Solution (2024)</h3>
                            <a href="https://github.com/Riadh-Ibrahim/Nafis-Healthcare-Management-System" className="more-details">View Project</a>
                        </strong>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
