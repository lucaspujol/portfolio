import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind"]
        },
        {
            title: "Backend",
            skills: ["C", "Python", "Java", "Bash", "Express.js", "Node.js"]
        },
        {
            title: "Tools & Others",
            skills: ["Git", "GitHub", "VS Code", "Trello", "GitHub Actions"]
        }
    ];

    return (
        <section id="skills">
            <div className="container">
                <h2>Skills</h2>
                <div className="skills-container">
                    {skillCategories.map((category, index) => (
                        <div className="skill-category" key={index}>
                            <h3>{category.title}</h3>
                            <ul className="skill-list">
                                {category.skills.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;