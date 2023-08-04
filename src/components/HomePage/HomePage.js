import React, { useRef } from 'react';
import Header from '../Header/Header'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <section id="about">
        <About />
        <section id="resume">
        <Resume />
      </section>
      <section id="contact">
        <Contact />
      </section>
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section>
      <Footer />
      </section>
    </>
  );
};

export default HomePage;