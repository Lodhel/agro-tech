import React from 'react';
import team1 from '../assets/img.png';
import team2 from '../assets/img_1.png';
import team3 from '../assets/img_2.png';

const team = [
  { name: 'Ирина Иринова', role: 'Агроном-эксперт', photo: team1, email: 'irina@agrotech.ru' },
  { name: 'Алексей Смирнов', role: 'Разработчик алгоритмов', photo: team2, email: 'alexey@agrotech.ru' },
  { name: 'Мария Орлова', role: 'Дизайнер интерфейсов', photo: team3, email: 'maria@agrotech.ru' },
];

const AboutSection = () => (
  <section className="about" id="about">
    <h2>О нас</h2>
    <p>
      «Агротех» — это сервис, созданный с любовью к земле и технологиям. Мы объединили знания агрономии, машинного обучения и
      дизайна, чтобы каждый мог легко и с удовольствием заботиться о своём участке.
    </p>
    <div className="team-grid">
      {team.map(({ name, role, photo, email }) => (
        <div className="team-card" key={name}>
          <img src={photo} alt={name} className="team-photo" />
          <h3>{name}</h3>
          <p>{role}</p>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      ))}
    </div>
  </section>
);

export default AboutSection;
