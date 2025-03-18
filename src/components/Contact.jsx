import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
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

    const handleOnChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                            disabled={status.submitting}
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