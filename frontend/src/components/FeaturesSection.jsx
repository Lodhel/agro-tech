import React, { useEffect } from 'react';

const features = [
  {
    icon: '🗺️',
    title: 'Интерактивная карта участка',
    text: 'Отмечайте грядки, деревья, кустарники. Добавляйте заметки к каждому элементу.',
  },
  {
    icon: '🌱',
    title: 'База растений и история посадок',
    text: 'Рекомендации по срокам, уходу, анализ прошлых сезонов и эффективности.',
  },
  {
    icon: '💧',
    title: 'Уход за растениями',
    text: 'Персональные советы по поливу, подкормке и обрезке с учётом климата и почвы.',
  },
  {
    icon: '📷',
    title: 'Диагностика по фото',
    text: 'Загружайте фото — получайте определение болезни и рекомендации по лечению.',
  },
  {
    icon: '🧪',
    title: 'Методы лечения',
    text: 'Выбор средств и методов борьбы с вредителями: народные, биологические, химические.',
  },
  {
    icon: '📆',
    title: 'Календарь садовода',
    text: 'Планировщик задач, напоминания и индивидуальный график ухода за растениями.',
  },
  {
    icon: '👥',
    title: 'Форум и сообщество',
    text: 'Общайтесь, делитесь опытом, задавайте вопросы и помогайте другим.',
  },
  {
    icon: '📦',
    title: 'Интеграция с магазинами',
    text: 'Связь с каталогами семян, удобрений и заказ нужного онлайн.',
  },
];

const FeaturesSection = () => {
  useEffect(() => {
    const slider = document.getElementById('featureSlider');

    const scrollStep = 320; // ширина одной карточки + отступ
    const interval = 3000; // каждые 3 секунды

    const autoScroll = setInterval(() => {
      if (!slider) return;

      // Если дошли до конца — возвращаем в начало
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
      <h2>Возможности сервиса</h2>
      <div className="features-slider-wrapper">
        <div className="features-slider" id="featureSlider">
          {features.map(({ icon, title, text }) => (
            <div className="feature-card" key={title}>
              <div className="feature-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
