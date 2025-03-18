import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
    const form = useRef();
    const recaptchaRef = useRef();
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    });
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [captchaVerified, setCaptchaVerified] = useState(false);

    const handleOnChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const handleCaptchaChange = (token) => {
        setCaptchaVerified(token ? true : false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaVerified) {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: 'Please complete the CAPTCHA verification.' }
            });
            return;
        }

        setStatus({
            submitted: false,
            submitting: true,
            info: { error: false, msg: null }
        });

        emailjs.sendForm(
            'service_qo2n83f',
            'template_delgauj',
            form.current,
            'k9NTBn56XAoAYsBlL'
        )
        .then((result) => {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: 'Message sent successfully!' }
            });
            setInputs({
                name: '',
                email: '',
                message: ''
            });
            // Reset the captcha
            setCaptchaVerified(false);
            recaptchaRef.current.reset();
            
            setTimeout(() => {
                setStatus({
                    submitted: false,
                    submitting: false,
                    info: { error: false, msg: null }
                });
            }, 3000);
        }, (error) => {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: 'Something went wrong. Please try again later.' }
            });
        });
    };

    return (
        <section id="contact">
            <div className="container">
                <h2>Contact Me</h2>
                <div className="contact-form">
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                className="form-control" 
                                value={inputs.name}
                                onChange={handleOnChange}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="form-control" 
                                value={inputs.email}
                                onChange={handleOnChange}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                className="form-control" 
                                rows="6" 
                                value={inputs.message}
                                onChange={handleOnChange}
                                required
                            ></textarea>
                        </div>
                        
                        <div className="form-group captcha-container">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6LdWy_gqAAAAAO5EuuJw-G8Fh34E6RuMf4ENUWy6"
                                onChange={handleCaptchaChange}
                            />
                        </div>
                        
                        {status.info.error && (
                            <div className="error-message">
                                <p>{status.info.msg}</p>
                            </div>
                        )}
                        
                        {status.submitted && (
                            <div className="success-message">
                                <p>{status.info.msg}</p>
                            </div>
                        )}

                        <button 
                            type="submit" 
                            className="button" 
                            disabled={status.submitting || !captchaVerified}
                        >
                            {status.submitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;