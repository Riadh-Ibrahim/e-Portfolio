import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.jpg'
import InstagramIcon from '../../assets/instagram.jpg'
import LinkedinIcon from '../../assets/linkedin.png'
import GithubIcon from '../../assets/github.jpg'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
      .sendForm('service_xf6tq0j', 'template_rz6b6u7', form.current, 'ItdLRQ-QUuWjP1SWA1axp')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert("Email sent! Thank you for your contribution!");
          form.current.reset();
        },
        (error) => {
          alert("Email sent! Thank you for your contribution!");
          form.current.reset();
          console.log('FAILED...', error.text);
        }
      );
  };
    return (
        <div id='contact'>
            <h1 class="contactPageTitle">Contact Me</h1>
            <span class="contactDesc">Please fill out the form below if you are intersted in a collaboration.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Enter your name' name="user_name"/>
                <input type="text" class="email" placeholder='Enter your email' name="user_email"/>
                <textarea className='msg' name="message" rows="5" placeholder='Your message'></textarea>
                <button type='submit' value='Send' class="submitBtn">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
