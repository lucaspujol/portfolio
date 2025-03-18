import React from 'react';
import profileImage from '../assets/rick.jpeg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img src={profileImage} alt="Lucas Pujol" className="hero-image" />
        <h1>Lucas Pujol</h1>
        <p>Student at Epitech Montpellier</p>
        <a href="#projects" className="button">View my Work</a>
      </div>
    </section>
  );
};

export default Hero;
