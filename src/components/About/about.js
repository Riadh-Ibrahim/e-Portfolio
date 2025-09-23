import React from "react";
import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faFileDownload, faDownload } from '@fortawesome/free-solid-svg-icons';
import cvFile from '../../assets/cv.pdf';

const About = () => {
  return (
    <section className="cards" id="services">
      <h2 className="title">About Me</h2>
      <div className="content">
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faUser} className="icon-style" />
          </div>
          <div className="info">
            <h3>Professional Background</h3>
            <p>I am Riadh Ibrahim, a 23-year-old AI Developer at Calgra Group (Edinburgh, UK) and Computer Networks & Telecommunications Engineering student at INSAT. I specialize in building intelligent, scalable AI solutions with extensive AWS cloud expertise.</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faGraduationCap} className="icon-style" />
          </div>
          <div className="info">
            <h3>Education & Certifications</h3>
            <p>Final-year engineering student at INSAT (2021-2026) with exceptional academic record (Baccalaureate: 18.29/20). AWS Certified Machine Learning Engineer Associate, Solutions Architect Associate, plus NVIDIA certifications in AI/ML and CUDA computing.</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faFileDownload} className="icon-style" />
          </div>
          <div className="info">
            <h3>Curriculum Vitae</h3>
            <p>Download my comprehensive CV to explore my professional journey, research publications, AWS certifications, and technical expertise in AI/ML and cloud technologies.</p>
            <div className="button-container">
              <a href={cvFile} download className="download-button">
                <FontAwesomeIcon icon={faDownload} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
