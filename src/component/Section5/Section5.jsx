import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Section5.module.scss';

const Section5 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    email: '',
  });

  const BOT_TOKEN = "7556415457:AAG_o-ULD3NptvbBxYasq5mgjK5K2EKgowg"; 
  const CHAT_ID = "6059580218"; 

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
      📩 Новая заявка:
      📞 Телефон: ${formData.phone}
      👤 Имя: ${formData.name}
      📧 Электронная почта: ${formData.email}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      });

      alert("Заявка отправлена!");
      setFormData({ phone: '', name: '', email: '' });
      setIsModalOpen(false); // Закрываем модальное окно после отправки
    } catch (error) {
      alert("Ошибка отправки!");
    }
  };

  return (
    <>
      <section className={s.section} data-aos="fade-up">
        <div className="container">
          <div className={s.wrap}>
            <img src="./Planshed.png" alt="" data-aos="zoom-in" />
            <div className={s.title} data-aos="fade-left">
              <h1>Записаться на <br /> пробный <br /> интерактив</h1>
              <p>Выбери успешную торговую стратегию вместе с Игорем Тощаковым </p>
              <p>Уровень - профессионал</p>
              <div className={s.suma} data-aos="flip-up">
                <s>12900 руб</s>
                <b>7500 руб.</b>
              </div>
              <button data-aos="fade-up" onClick={() => setIsModalOpen(true)}>
                Пробный урок <img src="./clik.png" alt="" />
              </button>
              <p data-aos="fade-in">Нажимая на кнопку, я соглашаюсь на обработку персональных данных с правилами пользования платформой</p>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className={s.modalOverlay}>
          <div className={s.modal}>
            <h2>Введите данные</h2>
            <input 
              className={s.title1} 
              type="text" 
              placeholder="Имя" 
              name="name"
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <input 
              className={s.title1} 
              type="tel" 
              placeholder="Телефон" 
              name="phone"
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
            <input 
              className={s.title1} 
              type="email" 
              placeholder="Email" 
              name="email"
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <div className={s.modalButtons}>
              <button className={s.btn2} onClick={() => setIsModalOpen(false)}>Закрыть</button>
              <button className={s.btn1} type="submit" onClick={handleSubmit}>Отправить</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Section5;
