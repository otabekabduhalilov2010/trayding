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
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
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
      setIsModalOpen(false);
    } catch (error) {
      alert("Ошибка отправки!");
    }
  };

  return (
    <>
      <section className={s.section}>
        <div className="container">
          <div className={s.wrap}>
            <div 
              className={s.imageWrapper}
              data-aos="zoom-in-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <img 
                className={s.planshed} 
                src="./Planshed.png" 
                alt=""
              />
            </div>
            <div className={s.title}>
              <h1 
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                Записаться на <br /> пробный <br /> интерактив
              </h1>
              <p 
                data-aos="fade-up"
                data-aos-delay="600"
                className={s.description}
              >
                Выбери успешную торговую стратегию вместе с Игорем Тощаковым
              </p>
              <p 
                data-aos="fade-up"
                data-aos-delay="700"
                className={s.level}
              >
                Уровень - профессионал
              </p>
              <div 
                className={s.suma}
                data-aos="flip-up"
                data-aos-delay="800"
              >
                <s className={s.oldPrice}>12900 руб</s>
                <b className={s.newPrice}>7500 руб.</b>
              </div>
              <button 
                className={s.mainButton}
                data-aos="zoom-in"
                data-aos-delay="900"
                onClick={() => setIsModalOpen(true)}
              >
                Пробный урок <img src="./clik.png" alt="" className={s.buttonIcon} />
              </button>
              <p 
                className={s.terms}
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Нажимая на кнопку, я соглашаюсь на обработку персональных данных с правилами пользования платформой
              </p>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className={s.modalOverlay}>
          <div className={`${s.modal} ${s.modalAnimate}`}>
            <h2 className={s.modalTitle}>Введите данные</h2>
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
              <button className={`${s.btn2} ${s.pulseAnimation}`} onClick={() => setIsModalOpen(false)}>
                Закрыть
              </button>
              <button className={`${s.btn1} ${s.pulseAnimation}`} type="submit" onClick={handleSubmit}>
                Отправить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Section5;