import React from 'react';
import heroImg from '../assets/hero-image.png';
import card1 from '../assets/card-disease.png';
import card2 from '../assets/card-calendar.png';
import card3 from '../assets/card-map.png';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-phone-floating">
            +7 927 422‑20‑94
          </div>

          <h1>AgroSpector</h1>
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

      <div className="hero-small-cards-wrapper">
        <div className="container">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
