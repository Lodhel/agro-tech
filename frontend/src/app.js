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
