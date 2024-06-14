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
                    Web developer
                </span>
                <p className="introPara">
                    I am a full-stack junior web developer with <br />
                    experience in building user-friendly web applications
                </p>
                <Link to='contact'>
                    <button className="btn">
                        <img src={btnImg} alt="Hire Me" className='btnImg' />
                        Let's work together!
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
