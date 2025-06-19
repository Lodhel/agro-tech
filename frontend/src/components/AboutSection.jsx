import React from 'react';
import team1 from '../assets/img.png';
import team2 from '../assets/img_1.png';
import team3 from '../assets/img_2.png';

const team = [
  { name: 'Имя Фамилия', role: 'Роль', photo: team1, email: 'user@agrotech.ru' },
  { name: 'Имя Фамилия', role: 'Роль', photo: team2, email: 'user@agrotech.ru' },
  { name: 'Имя Фамилия', role: 'Роль', photo: team3, email: 'user@agrotech.ru' },
];

const AboutSection = () => (
  <section className="about" id="about">
  <div className="container">
    <h2>О нас</h2>
    <p>
      «Агротех» — это сервис, созданный с любовью к земле и технологиям. Мы объединили знания агрономии, машинного обучения и
      дизайна, чтобы каждый мог легко и с удовольствием заботиться о своём участке.
    </p>
    <div className="team-grid">
      {team.map(({ name, role, photo, email }, index) => (
        <div className="team-card" key={`${name}-${index}`}>
          <img src={photo} alt={name} className="team-photo" />
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
