import React from 'react';
import resumePdf from '../assets/resume.pdf';

const About = () => {
    const experiences = [
        {
            title: "Senior Frontend Developer",
            company: "Tech Innovations Inc.",
            period: "2020 - Present",
            description: "Leading the frontend development team in creating responsive web applications using React. Implemented performance optimizations resulting in 40% faster load times."
        },
        {
            title: "UI/UX Developer",
            company: "Creative Digital Agency",
            period: "2018 - 2020",
            description: "Designed and developed user interfaces for various clients across different industries. Collaborated with designers to implement pixel-perfect designs."
        },
        {
            title: "Web Developer Intern",
            company: "StartUp Solutions",
            period: "2017 - 2018",
            description: "Assisted in developing web applications using JavaScript, HTML, and CSS. Participated in code reviews and agile development processes."
        }
    ];

    return (
        <section id="about">
            <div className="container">
                <h2>About Me</h2>
                <div className="about-content">
                    <div className="about-image">
                        <img src="https://img.freepik.com/photos-gratuite/codage-programme-informatique-ecran_53876-138060.jpg?t=st=1742159537~exp=1742163137~hmac=865b2e8c7575de74c27dd12c91031f8bddcfa1cc9fae35c962c91347a0936af4&w=826" alt="Profile" />
                    </div>
                    <div className="about-text">
                        <p>
                            I am a passionate web developer with a background in computer science. 
                            I specialize in creating responsive, user-friendly web applications
                            that solve real business problems.
                        </p>
                        <p>
                            With over 5 years of experience in frontend development, I've mastered 
                            modern frameworks and libraries like React, Vue, and Angular. I'm constantly 
                            learning and adapting to new technologies to deliver cutting-edge solutions.
                        </p>
                        
                        <div className="about-buttons">
                            <a href="#contact" className="button">Contact Me</a>
                            <a href={resumePdf} className="button button-outline" download>Download Resume</a>
                        </div>
                    </div>
                </div>
                
                <div className="experience-section">
                    <h3>Work Experience</h3>
                    <div className="experience-timeline">
                        {experiences.map((exp, index) => (
                            <div className="timeline-item" key={index}>
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h4>{exp.title}</h4>
                                    <div className="company-period">
                                        <span className="company">{exp.company}</span>
                                        <span className="period">{exp.period}</span>
                                    </div>
                                    <p>{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;