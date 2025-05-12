import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'Duck Hunt Game',
            description: 'A classic arcade-style game where players shoot ducks, with a focus on  user experience and features.',
            image: 'https://wallpapers.com/images/high/3d-duck-hunt-video-game-omhl1lq3pjbhknih.webp',
            tech: ['C', 'CSFML'],
            codeLink: 'https://github.com/lucaspujol/My-Hunter'
        },
        {
            title: 'Airplane Collision Simulation',
            description: 'Optimized 2D flight simulation handling aircraft collisions, focused on maximizing the number of planes at once.',
            image: 'https://i.ytimg.com/vi/NJIhQ4c_jMI/maxresdefault.jpg',
            tech: ['C', 'CSFML'],
            codeLink: 'https://github.com/lucaspujol/My-Radar'
        },
        {
            title: 'My Top',
            description: 'A remake of the "top" command, allowing users to view and manage processes on their system.',
            image: 'https://i0.wp.com/www.techpaste.com/wp-content/uploads/2013/08/Top_Command_Output_For_EveryCPU_Core.jpg',
            tech: ['C'],
            codeLink: 'https://github.com/lucaspujol/My-Top'
        },
        {
            title: 'Find the Biggest Square',
            description: 'An algorithmic challenge to find the largest square in a grid, focusing on efficiency and optimization.',
            image: 'https://user.oc-static.com/upload/2018/12/22/15455186093564_Screenshot%20from%202018-12-22%2023-41-27.png',
            tech: ['C'],
            codeLink: 'https://github.com/lucaspujol/Setting-Up'
        },
        {
            title: 'Python Statistics',
            description: 'Calculate different means and standard deviations of a many numbers, and calculate predictions based on them. No external libraries. The project has a minecraft plugin as bonus',
            image: 'https://i.ytimg.com/vi/pgzc4aU_HeY/maxresdefault.jpg',
            tech: ['Python', 'Java', 'Minecraft'],
            codeLink: 'https://github.com/lucaspujol/104-Neutrinos'
        },
        {
            title: 'Minishell 2',
            description: 'A shell implementation in C, with features like command execution, piping, and redirection, based of the tcsh shell. Part of a 3 projects series.',
            image: 'https://blog.desdelinux.net/wp-content/uploads/2019/01/bash-logo.jpg',
            tech: ['C'],
            codeLink: 'https://github.com/lucaspujol/Minishell-2'
        },
        {
            title: 'Robot Factory',
            description: 'A Compiler project that takes a simple language and compiles it into a custom bytecode, focusing on your parsing ability.',
            image: 'https://s3-cdn.cmlabs.co/page/2024/01/21/what-is-a-compiler-definition-types-functions-examples-446946.webp',
            tech: ['C'],
            codeLink: 'https://github.com/lucaspujol/Robot-Factory'
        },
        {
            title: '... This Portfolio!',
            description: 'This portfolio is built with React, and is a personal project to showcase my work and skills. Completely responsive and mobile friendly.',
            image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
            tech: ['React', 'JavaScript', 'CSS'],
            codeLink: 'https://github.com/lucaspujol/portfolio'
        }
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projectList.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.codeLink} className="button" target="_blank" rel="noopener noreferrer">View Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;