import React from 'react';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="logo">Агротех</div>
      <nav className="nav">
        <a href="#top">Главная</a>
        <a href="#features">Возможности</a>
        <a href="#about">О нас</a>
        <a href="#contacts">Контакты</a>
        <a href="#contacts" className="header-button">Попробовать</a>
      </nav>
    </div>
  </header>
);

export default Header;
