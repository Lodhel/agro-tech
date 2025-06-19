import React, { useState } from 'react';

const features = [
  {
    icon: '/images/map.png',
    title: 'Интерактивная карта участка',
    text: 'Отмечайте грядки, деревья, кустарники.',
    details: 'Планируйте размещение культур, редактируйте зоны, сохраняйте историю изменений.',
  },
  {
    icon: '/images/plant.png',
    title: 'База растений',
    text: 'Рекомендации по срокам и уходу.',
    details: 'Карточки с параметрами: посев, полив, температура, подкормка.',
  },
  {
    icon: '/images/drop.png',
    title: 'Уход за растениями',
    text: 'Советы по поливу, подкормке, обрезке.',
    details: 'Системные напоминания, учёт климата и состава почвы.',
  },
  {
    icon: '/images/photo.png',
    title: 'Диагностика по фото',
    text: 'Загружайте фото и получайте рекомендации.',
    details: 'Нейросеть определяет болезни по листу и предлагает методы лечения.',
  },
  {
    icon: '/images/medicine.png',
    title: 'Методы лечения',
    text: 'Выбор эффективных средств.',
    details: 'Народные, биологические и химические методы борьбы с вредителями.',
  },
  {
    icon: '/images/calendar.png',
    title: 'Календарь садовода',
    text: 'Планирование задач и напоминания.',
    details: 'Создавайте график ухода, отслеживайте прогресс по неделям и сезонам.',
  },
  {
    icon: '/images/forum.png',
    title: 'Форум и сообщество',
    text: 'Общение и обмен опытом.',
    details: 'Читайте советы, задавайте вопросы и находите единомышленников.',
  },
  {
    icon: '/images/shop.png',
    title: 'Интеграция с магазинами',
    text: 'Заказывайте семена и удобрения.',
    details: 'Интеграция с Wildberries, Ozon и агро-магазинами. Оплата и доставка онлайн.',
  },
];

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const openModal = (feature) => {
    setSelectedFeature(feature);
  };

  const closeModal = () => {
    setSelectedFeature(null);
  };

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Возможности сервиса</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <img src={feature.icon} alt={feature.title} className="feature-icon-img" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <button className="feature-button" onClick={() => openModal(feature)}>
                Подробнее
              </button>
            </div>
          ))}
        </div>

        {selectedFeature && (
          <div className="feature-modal-overlay" onClick={closeModal}>
            <div className="feature-modal" onClick={(e) => e.stopPropagation()}>
              <img src={selectedFeature.icon} alt={selectedFeature.title} className="feature-icon-img" />
              <h3>{selectedFeature.title}</h3>
              <p>{selectedFeature.text}</p>
              <p className="feature-details">{selectedFeature.details}</p>
              <button className="modal-close" onClick={closeModal}>Закрыть</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
