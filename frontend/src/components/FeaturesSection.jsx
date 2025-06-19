import React, { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: '🗺️',
    title: 'Интерактивная карта участка',
    text: 'Отмечайте грядки, деревья, кустарники.',
    details: 'Планируйте размещение культур, редактируйте зоны, сохраняйте историю изменений.',
  },
  {
    icon: '🌱',
    title: 'База растений',
    text: 'Рекомендации по срокам и уходу.',
    details: 'Карточки с параметрами: посев, полив, температура, подкормка.',
  },
  {
    icon: '📦',
    title: 'Интеграция с магазинами',
    text: 'Заказывайте семена и удобрения.',
    details: 'Интеграция с Wildberries, Ozon и агро-магазинами. Оплата и доставка онлайн.',
  },
  {
    icon: '📷',
    title: 'Диагностика по фото',
    text: 'Загружайте фото и получайте рекомендации.',
    details: 'Нейросеть определяет болезни по листу и предлагает методы лечения.',
  },
];

const FeaturesSection = () => {
  const sliderRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollStep = 340;
    const interval = 4000;

    const autoScroll = setInterval(() => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: scrollStep, behavior: 'smooth' });
      }
    }, interval);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Возможности сервиса</h2>
        <div className="features-slider-wrapper">
          <div className="features-slider" ref={sliderRef}>
            {features.map((f, idx) => (
              <div
                className={`feature-card-tile ${expandedIndex === idx ? 'expanded' : ''}`}
                key={f.title}
              >
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <button
                  className="feature-button"
                  onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                >
                  {expandedIndex === idx ? 'Скрыть' : 'Подробнее'}
                </button>
                {expandedIndex === idx && (
                  <div className="feature-details">
                    {f.details}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
