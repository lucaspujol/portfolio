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
                            Hey! 👋 I'm Lucas. I am a student at the campus of Epitech Montpellier.
                            I love cybersecurity and C. I am also discovering a strong liking for web development.
                        </p>
                        <p>
                            I am looking for a 4 to 6 month internship in a company that will allow me to learn and grow.
                            I am open to all offers, for any type of position, in any field. I am really looking forward 
                            to learning new techs and working with a team of professionals.
                            I love competitive video games and esports in general.
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