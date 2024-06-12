import React from "react";
import "./about.css";
import cvImg from '../../assets/cv.png';
import eduImg from '../../assets/education.png';
import persImg from '../../assets/personal.png';
import cvFile from '../../assets/cv.pdf';

const About = () => {
  return (
    <section className="cards" id="services">
      <h2 className="title">About :</h2>
      <div className="content">
        <div className="card">
          <div className="icon">
            <img src={persImg} alt="Personal Info" className="one" />
          </div>
          <div className="info">
            <h3>Personal informations</h3>
            <p>Hi, I am Riadh Ibrahim; Tunisian 22 years old student and full-stack web developer. I've dabbled in various programming languages and frameworks, constantly seeking to expand my skills and knowledge. I find joy in crafting digital experiences and solving problems through code.</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={eduImg} alt="Educational Path" className="one" />
          </div>
          <div className="info">
            <h3>Educational Path</h3>
            <p>I graduated Tunisian high school in 2021 and got my baccalaureate diploma with the highest honor. Currently, I am a third year computer networks and telecommunications engineering student at the National Institute of Applied Sciences and Technology (INSAT).</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={cvImg} alt="CV" className="one" id="one"/>
          </div>
          <div className="info">
            <h3>Curriculum Vitae</h3>
            <p>Feel free to access my CV by clicking the button below.</p>
            <br/>
            <a href={cvFile} download className="download-button">
              Download CV <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
