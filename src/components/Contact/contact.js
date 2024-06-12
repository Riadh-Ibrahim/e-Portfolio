import React from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.jpg'
import InstagramIcon from '../../assets/instagram.jpg'
import LinkedinIcon from '../../assets/linkedin.png'
import GithubIcon from '../../assets/github.jpg'

const Contact = () => {
    return (
        <div id='contact'>
            <h1 class="contactPageTitle">Contact Me</h1>
            <span class="contactDesc">Please fill out the form below if you are intersted in a collaboration.</span>
            <form className='contactForm'>
                <input type="text" className='name' placeholder='Enter your name'/>
                <input type="text" class="email" placeholder='Enter your email'/>
                <textarea className='msg' name="message" rows="5" placeholder='Your message'></textarea>
                <button type='submit' value='Send' class="submitBtn">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
