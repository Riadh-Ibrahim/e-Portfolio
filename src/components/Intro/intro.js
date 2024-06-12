import React from 'react';
import './intro.css';
import bg from '../../assets/pic1.png';
import btnImg from '../../assets/hire.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return( 
      <sectio id="intro">
        <div class="introContent">
            <span class="hello">Hello,</span>
            <span class="introText">I am <span class="introName">Riadh</span><br/>Web developer</span>
            <p class="introPara">I am a full-stack junior web developer with <br/>experience in building user-friendly web applications</p>
            <Link><button class="btn"><img src={btnImg} alt="Hire Me"className='btnImg'/>Let's work together !</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg"/>
      </sectio>
    )
}

export default Intro