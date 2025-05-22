import React from 'react';
import Hero from '../components/Hero';
import About from '../components/sections/AboutSection';
import Portfolio from '../components/sections/PortfolioSection';
import Skills from '../components/sections/SkillsSection';
import Contact from '../components/sections/ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <section id="about">
        <About isHome />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;