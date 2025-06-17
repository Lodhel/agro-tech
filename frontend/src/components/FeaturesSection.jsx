import React from 'react';

const features = [
  { icon: '🗺️', title: 'Карта участка', text: 'Создание схемы грядок, деревьев и других зон.' },
  { icon: '🌱', title: 'Посадки', text: 'База растений, история и рекомендации по срокам.' },
  { icon: '💧', title: 'Уход', text: 'Полив, удобрения и обрезка — с учётом вашего климата.' },
  { icon: '📷', title: 'Диагностика', text: 'Распознавание болезней растений по фото.' },
  { icon: '🧪', title: 'Лечение', text: 'Методы борьбы с болезнями и вредителями.' },
  { icon: '📆', title: 'Календарь', text: 'Планировщик и напоминания о садовых работах.' },
  { icon: '👥', title: 'Форум', text: 'Общение с другими огородниками.' },
];

const FeaturesSection = () => (
  <section className="features" id="features">
    <h2>Функциональность</h2>
    <div className="features-grid">
      {features.map(({ icon, title, text }) => (
        <div className="feature-card" key={title}>
          <div className="feature-icon">{icon}</div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
