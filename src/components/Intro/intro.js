import React, { useState, useEffect } from 'react';
import './intro.css';
import bg from '../../assets/pic1.png';
import btnImg from '../../assets/hire.png';
import { Link } from 'react-scroll';

const Intro = () => {
    const [name, setName] = useState("Riadh");
    const [animationClass, setAnimationClass] = useState("");

    useEffect(() => {
        const toggleName = setInterval(() => {
            setAnimationClass("out");
            setTimeout(() => {
                setName((prevName) => (prevName === "Riadh" ? "Ibrahim" : "Riadh"));
                setAnimationClass("in");
            }, 10);
        }, 2500);

        return () => clearInterval(toggleName);
    }, []);

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I am <span className={`introName ${animationClass}`}>{name}</span><br />
                    AI Developer & Cloud Architect
                </span>
                <p className="introPara">
                    AWS Certified AI Developer specializing in machine learning, <br />
                    generative AI, and scalable cloud solutions
                </p>
                <Link to='contact'>
                    <button className="btn">
                        <img src={btnImg} alt="Hire Me" className='btnImg' />
                        Let's collaborate!
                    </button>
                </Link>
            </div>
            <div className="circle">
                <img src={bg} alt="Profile" className="bg" />
            </div>
        </section>
    );
}

export default Intro;
