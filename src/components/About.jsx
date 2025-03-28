import React from 'react';
import resumePdf from '../assets/resume.pdf';

const About = () => {
    const experiences = [
        {
            title: "Epitech Digital School Cursus",
            company: "Epitech Montpellier",
            period: "2023 - Present",
            description: "Currently enrolled in the Epitech Digital School program, focusing on software development. \
                Realised more than 25 projects, mostly in C, aiming to develop a strong basis in problem-solving and \
                programming skills."
        },
        {
            title: "Bac Technologique",
            company: "Lycée Victor Hugo (Lunel)",
            period: "2021 - 2023",
            description: "Completed a technological baccalaureate with a focus on computer science and digital technology. \
                Gained fundamental knowledge in programming, and a strong logical mindset."
        }
    ];

    return (
        <section id="about">
            <div className="container">
                <h2>About Me</h2>
                <div className="about-content">
                    <div className="about-image">
                        <img src="https://shorturl.at/3JKTm" alt="Profile" />
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
                            I love competitive video games and esports.
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