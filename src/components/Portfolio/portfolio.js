import React from 'react';
import './portfolio.css';
import kyufiImg from '../../assets/kyufi.png'
import entreprenetImg from '../../assets/entreprenet.png'
import todoImg from '../../assets/todo.png'
import eveboookImg from '../../assets/evebook.png'


const Portfolio = () => {
    return (
        <section class="projects" id="projects">
                <h2 class="title">Projects :</h2>
                <p className="skills-subtitle">Here are some of the projects I have worked on, showcasing various skills and technologies.</p>
                <div class="content">
                <div class="project-card">
                    <div class="project-image">
                        <img src={eveboookImg} alt=''/>
                    </div>
                        <div class="project-info">
                            <p class="project-category">A module that enables users to reserve <b>EVE-NG</b> virtual machines and receive secure access details seamlessly.</p>
                            <strong class="project-title">
                                <span><h3>EVE-BOOK</h3></span>
                                <a href="https://github.com/Riadh-Ibrahim/EVE-Book" class="more-details">View More</a>
                            </strong>
                        </div>
                    </div>
                    <div class="project-card" id='entreprenet'>
                        <div class="project-image">
                            <img src={entreprenetImg} alt='' />
                        </div>
                        <div class="project-info">
                            <p class="project-category">A platform buit with MERN stack that allows investors to connect with entrepreneurs in a dynamic environment</p>
                            <strong class="project-title">
                                <span><h3>EntrepreNet</h3></span>
                                <a href="https://github.com/Riadh-Ibrahim/Entreprenet" class="more-details">View More</a>
                            </strong>
                        </div>
                    </div>
                    <div class="project-card">
                        <div class="project-image">
                            <img src={kyufiImg} alt=''/>
                        </div>
                        <div class="project-info">
                            <p class="project-category">An <b>e-commerce</b> web application designed for a <b>Coffee Shop</b>, facilitating customers to place orders seamlessly, built with HTML, CSS, JavaScript, PHP, and MySQL.</p>
                            <strong class="project-title">
                                <span><b><h3>Kyufi Coffee Shop</h3></b></span>
                                <a href="https://github.com/Riadh-Ibrahim/Coffee-Shop-Website" class="more-details">View More</a>
                            </strong>
                        </div>
                    </div>
                    <div class="project-card">
                        <div class="project-image">
                            <img src={todoImg} alt=''/>
                        </div>
                        <div class="project-info">
                            <p class="project-category">A <b>Todo List</b> page using HTML, CSS & JavaScript</p>
                            <strong class="project-title">
                                <span><h3>TODO List</h3></span>
                                <a href="https://github.com/Riadh-Ibrahim/Todo-List" class="more-details">View More</a>
                            </strong>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Portfolio;
