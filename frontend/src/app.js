import React from 'react';
import './styles/main.dark.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';

function App() {
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
