import React from 'react';
import profileImage from '../assets/photo_profil.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <a href="https://www.linkedin.com/in/lucas-pujol-epitech/" target="_blank" rel="noopener noreferrer">
          <img src={profileImage} alt="Lucas Pujol" className="hero-image" />
        </a>
        <h1>Lucas Pujol</h1>
        <p>Student at Epitech Montpellier</p>
        <a href="#projects" className="button">View my Work</a>
      </div>
    </section>
  );
};

export default Hero;
