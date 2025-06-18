import React from 'react';
import qrTelegram from '../assets/qr-telegram.png';
import qrVK from '../assets/qr-vk.png';

const JoinSection = () => (
  <section className="join" id="contacts">
    <h2>Присоединяйтесь к сообществу</h2>
    <p>Следите за обновлениями, задавайте вопросы и делитесь опытом вместе с другими садоводами</p>
    <div className="join-grid">
      <div className="join-card">
        <img src={qrTelegram} alt="QR Telegram" className="qr" />
          <p><a href="https://t.me/GreenCodeTech">Telegram канал</a></p>
      </div>
      <div className="join-card">
        <img src={qrVK} alt="QR VK" className="qr" />
          <p><a href="https://vk.com/club230958317">Группа ВКонтакте</a></p>
      </div>
    </div>
  </section>
);

export default JoinSection;
