import React from 'react';
import qrTelegram from '../assets/qr-telegram.png';
import qrVK from '../assets/qr-vk.png';

const JoinSection = () => (
  <section className="join">
    <h2>Присоединяйтесь к сообществу</h2>
    <p>Следите за обновлениями, задавайте вопросы и делитесь опытом вместе с другими садоводами</p>
    <div className="join-grid">
      <div className="join-card">
        <img src={qrTelegram} alt="QR Telegram" className="qr" />
        <p>Telegram-группа</p>
      </div>
      <div className="join-card">
        <img src={qrVK} alt="QR VK" className="qr" />
        <p>Группа ВКонтакте</p>
      </div>
    </div>
  </section>
);

export default JoinSection;
