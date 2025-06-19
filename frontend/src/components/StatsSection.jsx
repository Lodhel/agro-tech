import React from 'react';

const stats = [
  { number: '1', label: 'интерактивная карта участка' },
  { number: '50+', label: 'видов растений с рекомендациями' },
  { number: '100%', label: 'персонализация под участок' },
  { number: '24/7', label: 'доступ к диагностике и календарю' },
];

const StatsSection = () => (
  <section className="stats">
  <div className="container">
    <div className="stats-grid">
      {stats.map(({ number, label }) => (
        <div className="stat-card" key={label}>
          <h3>{number}</h3>
          <p>{label}</p>
        </div>
      ))}
    </div>
    </div>
  </section>
);

export default StatsSection;
