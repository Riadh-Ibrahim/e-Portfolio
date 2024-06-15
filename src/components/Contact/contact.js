import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const fromName = form.current.from_name.value.trim();
        const fromEmail = form.current.from_email.value.trim();
        const message = form.current.message.value.trim();

        if (!fromName || !fromEmail || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        emailjs
            .sendForm('service_318vlhn', 'template_rz6b6u7', form.current, 'kPP3-fJhMztH7vrOz')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    alert("Email sent! Thank you for your contribution!");
                    form.current.reset();
                },
                (error) => {
                    alert("Email sending failed. Please try again.");
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div id='contact'>
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below if you are interested in a collaboration.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Enter your name' name="from_name" />
                <input type="text" className='email' placeholder='Enter your email' name="from_email" />
                <textarea className='msg' name="message" rows="5" placeholder='Your message'></textarea>
                <button type='submit' className='submitBtn'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;
