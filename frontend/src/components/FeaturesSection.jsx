import React, { useState } from 'react';

const features = [
  {
    icon: '/icons/map.svg',
    title: 'Интерактивная карта участка',
    text: 'Отмечайте грядки, деревья, кустарники.',
    details: 'Планируйте размещение культур, редактируйте зоны, сохраняйте историю изменений.',
  },
  {
    icon: '/icons/plant.svg',
    title: 'База растений',
    text: 'Рекомендации по срокам и уходу.',
    details: 'Карточки с параметрами: посев, полив, температура, подкормка.',
  },
  {
    icon: '/icons/drop.svg',
    title: 'Уход за растениями',
    text: 'Советы по поливу, подкормке, обрезке.',
    details: 'Системные напоминания, учёт климата и состава почвы.',
  },
  {
    icon: '/icons/photo.svg',
    title: 'Диагностика по фото',
    text: 'Загружайте фото и получайте рекомендации.',
    details: 'Нейросеть определяет болезни по листу и предлагает методы лечения.',
  },
  {
    icon: '/icons/medicine.svg',
    title: 'Методы лечения',
    text: 'Выбор эффективных средств.',
    details: 'Народные, биологические и химические методы борьбы с вредителями.',
  },
  {
    icon: '/icons/calendar.svg',
    title: 'Календарь садовода',
    text: 'Планирование задач и напоминания.',
    details: 'Создавайте график ухода, отслеживайте прогресс по неделям и сезонам.',
  },
  {
    icon: '/icons/forum.svg',
    title: 'Форум и сообщество',
    text: 'Общение и обмен опытом.',
    details: 'Читайте советы, задавайте вопросы и находите единомышленников.',
  },
  {
    icon: '/icons/shop.svg',
    title: 'Интеграция с магазинами',
    text: 'Заказывайте семена и удобрения.',
    details: 'Интеграция с Wildberries, Ozon и агро-магазинами. Оплата и доставка онлайн.',
  },
];

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Возможности сервиса</h2>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div className="feature-card" key={idx}>
              <img src={feature.icon} alt={feature.title} className="feature-icon" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <button className="feature-button" onClick={() => setSelectedFeature(feature)}>
                Подробнее
              </button>
            </div>
          ))}
        </div>

        {selectedFeature && (
          <div className="feature-modal-overlay" onClick={() => setSelectedFeature(null)}>
            <div className="feature-modal" onClick={(e) => e.stopPropagation()}>
              <h3>{selectedFeature.title}</h3>
              <p>{selectedFeature.details}</p>
              <button className="modal-close" onClick={() => setSelectedFeature(null)}>
                Закрыть
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
