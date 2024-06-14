import React from "react";
import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import cvFile from '../../assets/cv.pdf';

const About = () => {
  return (
    <section className="cards" id="services">
      <h2 className="title">About :</h2>
      <div className="content">
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faUser} className="icon-style" />
          </div>
          <div className="info">
            <h3>Personal Information</h3>
            <br/>
            <p>Hi, I am Riadh Ibrahim; Tunisian 22 years old student and full-stack web developer. I've dabbled in various programming languages and frameworks, constantly seeking to expand my skills and knowledge. I find joy in crafting digital experiences and solving problems through code.</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faGraduationCap} className="icon-style" />
          </div>
          <div className="info">
            <h3>Educational Path</h3>
            <br/>
            <p>I graduated Tunisian high school in 2021 and got my baccalaureate diploma with the highest honor. Currently, I am a third year computer networks and telecommunications engineering student at the National Institute of Applied Sciences and Technology (INSAT).</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faFileDownload} className="icon-style" />
          </div>
          <div className="info">
            <h3>Curriculum Vitae</h3>
            <br/>
            <p>Feel free to access my CV by clicking the button below.</p>
            <br/>
            <a href={cvFile} download className="download-button">
              Download CV <FontAwesomeIcon icon={faFileDownload} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
