import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Lucas Pujol. All rights reserved.</p>
            <div>
                <a href="https://github.com/https://github.com/lucaspujol" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/lucas-pujol-epitech/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </footer>
    );
};

export default Footer;