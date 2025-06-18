import React from 'react';
import './styles/main.css';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <Footer />
    </>
  );
}

export default App;
