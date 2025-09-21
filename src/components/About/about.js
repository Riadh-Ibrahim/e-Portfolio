import React from "react";
import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import cvFile from '../../assets/cv.pdf';

const About = () => {
  return (
    <section className="cards" id="services">
      <h2 className="title">About</h2>
      <div className="content">
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faUser} className="icon-style" />
          </div>
          <div className="info">
            <h3>Professional Background</h3>
            <br/>
            <p>I am Riadh Ibrahim, a 23-year-old AI Developer at Calgra Group (Edinburgh, UK) and Computer Networks & Telecommunications Engineering student at INSAT. I specialize in AI/ML solutions, cloud architecture, and have extensive experience with AWS certified technologies.</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faGraduationCap} className="icon-style" />
          </div>
          <div className="info">
            <h3>Education & Certifications</h3>
            <br/>
            <p>Currently pursuing Computer Networks and Telecommunications Engineering at INSAT (2021-2026). Achieved Baccalaureate with 18.29/20. AWS Certified Machine Learning Engineer Associate, Solutions Architect Associate, and multiple NVIDIA certifications in AI/ML.</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faFileDownload} className="icon-style" />
          </div>
          <div className="info">
            <h3>Curriculum Vitae</h3>
            <br/>
            <p>Download my comprehensive CV to learn about my professional experience, research publications, AWS certifications, and technical expertise in AI/ML and cloud technologies.</p>
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
