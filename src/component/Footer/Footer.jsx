import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Footer.module.scss';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={s.section}>
      <div className="container">
          <div data-aos="fade-up" className={s.imgs}>
          <img src="./Logo.png" alt="Логотип" />
          </div>
        <div className={s.wrap}>
          <div className={s.title} data-aos="fade-down">
           <div className={s.links}>
            <a  data-aos="fade-down" href="https://www.youtube.com/@L-A-Igrok">Обучающие ролики</a>
            <a  data-aos="fade-up" href="https://www.youtube.com/watch?v=6BFTVg7Jhfk">Подкаст L.A.Igrok</a>
            <a  data-aos="fade-down" href="">Личный кабинет</a>
           </div>

            <p>ИНН: 9701168470</p>
            <p>ОГРН: 1207700502206</p>
            <p>г. Москва, ул.Макаренко, 2/21 стр. 2</p>

            <p>Аврора: платформа знаний и центр развития бизнеса</p>
          </div>
          <iframe 
            data-aos="fade-left"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95942.48002514339!2d69.1969663732792!3d41.28269707465951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1738321874935!5m2!1sru!2s" 
            width="550" 
            height="260" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Footer;
