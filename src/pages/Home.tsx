import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Market from '../components/Market';
import Revenue from '../components/Revenue';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Market />
      <Revenue />
      <Contact />
    </main>
  );
};

export default Home; 