import React, { useRef, useState } from 'react';
import './contact.css';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const fromName = form.current.from_name.value.trim();
        const fromEmail = form.current.from_email.value.trim();
        const message = form.current.message.value.trim();

        if (!fromName || !fromEmail || !message) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(''), 3000);
            return;
        }

        setIsSubmitting(true);
        
        // Simulate email sending process
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            form.current.reset();
            
            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(''), 5000);
        }, 2000);
    };

    return (
        <div id='contact'>
            <h1 className="contactPageTitle">Let's Connect</h1>
            <span className="contactDesc">
                Ready to collaborate on AI projects, discuss cloud architecture, or explore innovative solutions? 
                <br />Let's create something amazing together!
            </span>
            
            {submitStatus === 'success' && (
                <div className="status-message success">
                    <i className="fas fa-check-circle"></i>
                    Message sent successfully! I'll get back to you soon.
                </div>
            )}
            
            {submitStatus === 'error' && (
                <div className="status-message error">
                    <i className="fas fa-exclamation-circle"></i>
                    Please fill in all fields before submitting.
                </div>
            )}
            
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input 
                    type="text" 
                    className='name' 
                    placeholder='Your Name' 
                    name="from_name"
                    disabled={isSubmitting}
                />
                <input 
                    type="email" 
                    className='email' 
                    placeholder='Your Email' 
                    name="from_email"
                    disabled={isSubmitting}
                />
                <textarea 
                    className='msg' 
                    name="message" 
                    rows="5" 
                    placeholder='Your Message - Let me know about your project or collaboration ideas'
                    disabled={isSubmitting}
                ></textarea>
                <button type='submit' className='submitBtn' disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <i className="fas fa-spinner fa-spin"></i>
                            Sending...
                        </>
                    ) : (
                        <>
                            <i className="fas fa-paper-plane"></i>
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default Contact;
