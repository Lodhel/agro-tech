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

  // Смотрим настройки пользователя
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('theme');
    setTheme(saved || (prefersDark ? 'dark' : 'light'));
  }, []);

  // Подключаем нужный CSS-файл
  useEffect(() => {
    const existing = document.getElementById('app-theme');
    if (existing) existing.remove();

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'app-theme';
    link.href = `./styles/main${theme === 'dark' ? '.dark' : ''}.css`; // путь из /public
    document.head.appendChild(link);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
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
