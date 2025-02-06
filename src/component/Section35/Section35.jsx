import React from 'react';
import s from './Section35.module.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Section35 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrap}>
          <div className={s.item} data-aos="fade-up">
            <h3 className={s.title}>КОГДА</h3>
            <p className={s.text}>Курс начинается с 21 мая - 4 июня</p>
          </div>
          <div className={s.item} data-aos="fade-up" data-aos-delay="200">
            <h3 className={s.title}>ДЛИТЕЛЬНОСТЬ</h3>
            <p className={s.text}>2 недели</p>
          </div>
          <div className={s.item} data-aos="fade-up" data-aos-delay="400">
            <h3 className={s.title}>ФОРМАТ</h3>
            <p className={s.text}>Лекции в записи и интерактивные занятия по выходным</p>
          </div>
          <div className={s.item} data-aos="fade-up" data-aos-delay="600">
            <h3 className={s.title}>ДОКУМЕНТ</h3>
            <p className={s.text}>Сертификат об успешном прохождении курса</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section35;
