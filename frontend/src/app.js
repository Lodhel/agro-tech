import React, { useState, useEffect } from 'react';
import { useThemeLoader } from './components/ThemeLoader';
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
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(saved || (prefersDark ? 'dark' : 'light'));
  }, []);

  useThemeLoader(theme);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    setTheme(next);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 1001,
          padding: '8px 16px',
          borderRadius: '8px',
          background: '#10b981',
          color: '#fff',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Сменить тему
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
