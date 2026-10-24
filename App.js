import React, { useEffect } from 'react';
import Hero from './components/Hero.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

export default function App() {
  useEffect(() => {
    // Refresh ScrollTrigger once everything is rendered
    setTimeout(() => ScrollTrigger.refresh(), 200);
  }, []);

  return (
    <>
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}
