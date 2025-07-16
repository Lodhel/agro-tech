import React, { useEffect, useState } from 'react';
// import './styles/main.dark.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';

function App() {
useEffect(() => {
    const [theme, setTheme] = useState('light');
  const existing = document.getElementById('app-theme');
  if (existing) existing.remove();

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.id = 'app-theme';
  link.href = `./styles/main${theme === 'dark' ? '.dark' : ''}.css`; // <-- путь внутри public
  document.head.appendChild(link);
}, [theme]);
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
