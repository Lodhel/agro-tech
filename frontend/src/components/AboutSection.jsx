import React from 'react';

const team = [
  { name: 'Роман Татаринов', role: 'Founder & Backend', email: 'r.tatarinov@hotmail.com' },
  { name: 'Анастасия Иванова', role: 'UX/UI', email: 'lorentini10@gmail.com' },
  { name: 'Александра Аносова', role: 'Product Manager', email: 'anosova.sasha97@gmail.com' },
];

const AboutSection = () => (
  <section className="about" id="about">
  <div className="container">
    <h2>О нас</h2>
    <p>
      «AgroSpector» — это сервис, созданный с любовью к земле и технологиям. Мы объединили знания агрономии, машинного обучения и
      дизайна, чтобы каждый мог легко и с удовольствием заботиться о своём участке.
    </p>
    <div className="team-grid">
      {team.map(({ name, role, email }, index) => (
        <div className="team-card" key={`${name}-${index}`}>
          {/*<img src={photo} alt={name} className="team-photo" />*/}
          <h3>{name}</h3>
          <p>{role}</p>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      ))}
    </div>
    </div>
  </section>
);

export default AboutSection;
