import React from 'react';
import FeatureCard from './FeatureCard';

import map from '../icons/map.svg';
import plant from '../icons/plant.svg';
import droplet from '../icons/droplet.svg';
import photo from '../icons/photo.svg';
import pill from '../icons/pill.svg';
import calendar from '../icons/calendar.svg';
import forum from '../icons/forum.svg';
import shop from '../icons/shopping-cart.svg';

const features = [
  {
    icon: map,
    title: 'Интерактивная карта участка',
    text: 'Отмечайте грядки, деревья, кустарники.',
    details: 'Планируйте размещение культур, редактируйте зоны, сохраняйте историю изменений.',
  },
  {
    icon: plant,
    title: 'База растений',
    text: 'Рекомендации по срокам и уходу.',
    details: 'Карточки с параметрами: посев, полив, температура, подкормка.',
  },
  {
    icon: droplet,
    title: 'Уход за растениями',
    text: 'Советы по поливу, подкормке, обрезке.',
    details: 'Системные напоминания, учёт климата и состава почвы.',
  },
  {
    icon: photo,
    title: 'Диагностика по фото',
    text: 'Загружайте фото и получайте рекомендации.',
    details: 'Нейросеть определяет болезни по листу и предлагает методы лечения.',
  },
  {
    icon: pill,
    title: 'Методы лечения',
    text: 'Выбор эффективных средств.',
    details: 'Народные, биологические и химические методы борьбы с вредителями.',
  },
  {
    icon: calendar,
    title: 'Календарь садовода',
    text: 'Планирование задач и напоминания.',
    details: 'Создавайте график ухода, отслеживайте прогресс по неделям и сезонам.',
  },
  {
    icon: forum,
    title: 'Форум и сообщество',
    text: 'Общение и обмен опытом.',
    details: 'Читайте советы, задавайте вопросы и находите единомышленников.',
  },
  {
    icon: shop,
    title: 'Интеграция с магазинами',
    text: 'Заказывайте семена и удобрения.',
    details: 'Интеграция с Wildberries, Ozon и агро-магазинами. Оплата и доставка онлайн.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Возможности сервиса</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
              details={feature.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
