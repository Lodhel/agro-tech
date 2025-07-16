import React from 'react';
import qrTelegram from '../assets/qr-telegram.png';
import qrBot from '../assets/qr-bot.png';
import qrVK from '../assets/qr-vk.png';

const JoinSection = () => (
  <section className="join" id="contacts">
  <div className="container">
    <h2>Присоединяйтесь к сообществу</h2>
    <p>Следите за обновлениями, задавайте вопросы и делитесь опытом вместе с другими садоводами</p>
    <div className="join-grid">
      <div className="join-card">
        <p className="qr-label">Telegram канал</p>
        <img src={qrTelegram} alt="QR Telegram" className="qr" />
        <a href="https://t.me/AgroSpector" target="_blank" rel="noopener noreferrer" className="qr-button">
          Перейти в Telegram →
        </a>
      </div>
      <div className="join-card">
        <p className="qr-label">Группа ВКонтакте</p>
        <img src={qrVK} alt="QR VK" className="qr" />
        <a href="https://vk.com/club230958317" target="_blank" rel="noopener noreferrer" className="qr-button">
          Перейти в VK →
        </a>
      </div>
      <div className="join-card">
        <p className="qr-label">Telegram-бот</p>
        <img src={qrBot} alt="QR Bot" className="qr" />
        <a href="https://t.me/AgroSpectorBot" target="_blank" rel="noopener noreferrer" className="qr-button">
          Перейти в Telegram →
        </a>
      </div>
    </div>
    </div>
  </section>
);

export default JoinSection;
