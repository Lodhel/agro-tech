import React from 'react';
import heroImg from '../assets/hero-image.png';
import card1 from '../assets/card-disease.png';
import card2 from '../assets/card-calendar.png';
import card3 from '../assets/card-map.png';

const HeroSection = () => (
  <section className="hero">
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
  <svg className="hero-wave" viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg">
    <path fill="#ffffff" fillOpacity="1" d="M0,64L80,101.3C160,139,320,213,480,202.7C640,192,800,96,960,69.3C1120,43,1280,85,1360,106.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
  </svg>
  </section>
);

export default HeroSection;
