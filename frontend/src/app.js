import React from 'react';
import './styles/main.css';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <AboutSection />
      <JoinSection />
      <Footer />
    </>
  );
}

export default App;
