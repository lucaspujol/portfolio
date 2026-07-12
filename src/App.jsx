import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Status from './components/Status.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Stack from './components/Stack.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Hero />
        <Status />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
