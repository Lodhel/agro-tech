import React from 'react';
import heroImg from '../assets/hero-image.png';
import card1 from '../assets/card-disease.png';
import card2 from '../assets/card-calendar.png';
import card3 from '../assets/card-map.png';

const HeroSection = () => (
  <section className="hero-grid">
    <div className="hero-left">
      <h1>Агротех</h1>
      <p>
        Нарисуй участок, узнай что посажено, получай рекомендации, диагностику и напоминания по уходу.
        Всё в одном месте — на твоём телефоне или ноутбуке.
      </p>
    </div>
    <div className="hero-right">
      <img src={heroImg} alt="Главный экран сервиса" />
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
  </section>
);

export default HeroSection;
