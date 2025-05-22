import React from 'react';
import Hero from '../components/Hero';
import About from './About';

const Home = () => {
  return (
    <>
      <Hero />
      <section id="about">
        <About />
      </section>
    </>
  );
};

export default Home;
