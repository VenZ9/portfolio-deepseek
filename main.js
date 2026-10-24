import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import MascotCanvas from './components/MascotCanvas.js';

// ---- Custom Cursor + GSAP ----
const cursor = document.getElementById('cursor');
const dot = document.getElementById('cursor-dot');

window.addEventListener('mousemove', (e) => {
  gsap.to(cursor, { x: e.clientX - 10, y: e.clientY - 10, duration: 0.2 });
  gsap.to(dot, { x: e.clientX - 3, y: e.clientY - 3, duration: 0.05 });
});

// Hover effect for interactive elements
document.addEventListener('mouseover', (e) => {
  if (e.target.closest('a, button, .project-card')) {
    gsap.to(cursor, { scale: 2, borderColor: '#f472b6', duration: 0.3 });
  }
});
document.addEventListener('mouseout', (e) => {
  if (e.target.closest('a, button, .project-card')) {
    gsap.to(cursor, { scale: 1, borderColor: 'rgba(255,255,255,0.5)', duration: 0.3 });
  }
});

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// ---- Mount React App ----
const root = createRoot(document.getElementById('root'));
root.render(<App />);

// ---- Mount Mascot Canvas ----
const mascotRoot = createRoot(document.getElementById('mascot-container'));
mascotRoot.render(<MascotCanvas />);