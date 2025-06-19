import React, { useState } from 'react';

const features = [
  {
    icon: '🗺️',
    title: 'Интерактивная карта участка',
    text: 'Отмечайте грядки, деревья, кустарники.',
    details: 'Планируйте размещение культур, редактируйте зоны, сохраняйте историю изменений. Поддерживается масштабирование, экспорт схем и комментарии к объектам.',
  },
  {
    icon: '🌱',
    title: 'База растений',
    text: 'Рекомендации по срокам и уходу.',
    details: 'Карточки с параметрами: посев, полив, температура, подкормка. История посадок, фильтрация по типам, зонам и совместимости растений.',
  },
  {
    icon: '💧',
    title: 'Уход за растениями',
    text: 'Советы по поливу, подкормке, обрезке.',
    details: 'Персональные рекомендации с учётом климата, типа почвы и состояния растений. Поддержка расписания ухода и напоминаний.',
  },
  {
    icon: '📷',
    title: 'Диагностика по фото',
    text: 'Загружайте фото и получайте рекомендации.',
    details: 'Нейросеть определяет болезни по листу и предлагает методы лечения. База включает более 200 заболеваний и вредителей.',
  },
  {
    icon: '🧪',
    title: 'Методы лечения',
    text: 'Выбор эффективных средств.',
    details: 'Биологические, народные и химические методы. Рекомендации по дозировкам, обработке и технике безопасности.',
  },
  {
    icon: '📆',
    title: 'Календарь садовода',
    text: 'Планирование задач и напоминания.',
    details: 'Индивидуальный график по зонам, типам растений и погоде. Поддержка Google Calendar, Telegram-уведомлений.',
  },
  {
    icon: '👥',
    title: 'Форум и сообщество',
    text: 'Общение и обмен опытом.',
    details: 'Задавайте вопросы, делитесь советами, участвуйте в обсуждениях и совместных проектах. Встроенные чаты и рейтинги.',
  },
  {
    icon: '📦',
    title: 'Интеграция с магазинами',
    text: 'Заказывайте семена и удобрения.',
    details: 'Интеграция с Wildberries, Ozon и агро-магазинами. Оплата и доставка онлайн. Автоматические подборки по потребностям участка.',
  },
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Возможности сервиса</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <button
                className="feature-button"
                onClick={() => setActiveFeature(feature)}
              >
                Подробнее
              </button>
            </div>
          ))}
        </div>

        {activeFeature && (
          <div className="feature-modal-overlay" onClick={() => setActiveFeature(null)}>
            <div className="feature-modal" onClick={(e) => e.stopPropagation()}>
              <h3>{activeFeature.title}</h3>
              <p>{activeFeature.details}</p>
              <button className="modal-close" onClick={() => setActiveFeature(null)}>
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
