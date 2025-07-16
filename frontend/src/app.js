import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('theme');
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const applyTheme = (theme) => {
    const lightLink = document.getElementById('theme-light');
    const darkLink = document.getElementById('theme-dark');

    if (theme === 'dark') {
      lightLink.disabled = true;
      darkLink.disabled = false;
    } else {
      lightLink.disabled = false;
      darkLink.disabled = true;
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          zIndex: 10000,
          background: '#10b981',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
      </button>

      <Header />
      <HeroSection />
      <StatsSection />
      <section className="gradient-wrapper">
        <FeaturesSection />
        <AboutSection />
      </section>
      <JoinSection />
      <Footer />
    </>
  );
}

export default App;
