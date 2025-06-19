import React from 'react';
import heroImg from '../assets/hero-image.png';
import card1 from '../assets/card-disease.png';
import card2 from '../assets/card-calendar.png';
import card3 from '../assets/card-map.png';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-header">
        <div className="hero-phone">
          <a href="tel:+79654128395">+7 965 412‑83‑95</a>
        </div>
      </div>

      <div className="hero-grid">
        <div className="hero-left">
          <h1>Агротех</h1>
          <p className="hero-subtitle">Цифровой помощник для садоводов и огородников</p>
          <p className="hero-desc">
            Построй схему участка, получай рекомендации, диагностику и напоминания по уходу.
            Всё в одном месте — на телефоне или ноутбуке.
          </p>
          <a href="#features" className="cta-button">Возможности сервиса</a>
          <p className="hero-subnote">Технологии, которые прорастают вместе с урожаем</p>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Главный экран сервиса" />
        </div>
      </div>

      <div className="hero-small-cards">
        <div className="small-card">
          <img src={card1} alt="Распознавание болезни по фото" />
          <p>Определи заболевание по фото растения</p>
        </div>
        <div className="small-card">
          <img src={card2} alt="Календарь задач" />
          <p>Личный календарь ухода и посадок</p>
        </div>
        <div className="small-card">
          <img src={card3} alt="Интерактивная карта участка" />
          <p>Схема участка с грядками и зонами</p>
        </div>
      </div>

      <svg className="hero-wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,192L80,197.3C160,203,320,213,480,192C640,171,800,117,960,122.7C1120,128,1280,192,1360,224L1440,256V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z"
        />
      </svg>
    </section>
  );
};

export default HeroSection;
