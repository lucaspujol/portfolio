import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './styles/main.css';

function App() {
    useEffect(() => {
        // Animate sections when they come into view
        const sections = document.querySelectorAll('section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        sections.forEach(section => {
            observer.observe(section);
        });
        
        // Add stagger animation class to lists
        const lists = document.querySelectorAll('ul li, ol li');
        lists.forEach(item => {
            item.classList.add('stagger-item');
        });
        
        // Cleanup function to disconnect the observer when component unmounts
        return () => {
            if (observer) {
                sections.forEach(section => {
                    observer.unobserve(section);
                });
            }
        };
    }, []);
    
    return (
        <ThemeProvider>
            <div className="app-container">
                <Header />
                <main className="main-content">
                    <Hero />
                    <Projects />
                    <About />
                    <Skills />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;