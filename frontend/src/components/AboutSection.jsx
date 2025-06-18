import React from 'react';
import team1 from '../assets/img.png';
import team2 from '../assets/img_1.png';
import team3 from '../assets/img_2.png';

const team = [
  { name: 'Имя Фамилия', role: 'CEO', photo: team1, email: 'name@agrotech.ru' },
  { name: 'Имя Фамилия', role: 'Агроном', photo: team2, email: 'name@agrotech.ru' },
  { name: 'Имя Фамилия', role: 'Разработчик', photo: team3, email: 'name@agrotech.ru' },
];

const AboutSection = () => (
  <section className="about" id="about">
    <h2>О нас</h2>
    <p>Агротех Помощник — это инициатива группы энтузиастов, объединивших агрономию и цифровые технологии.</p>
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
