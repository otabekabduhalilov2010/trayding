import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Section33.module.scss';

const Section33 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section className={s.section} data-aos="fade-up">
        <div className="container">
          <div className={s.wrap}>
            <div className={s.title} data-aos="fade-up" data-aos-delay="100">
              <h1>Михаил Хазин</h1>
              <b>Эфир Экономика по-русски</b>
              <h3>с Игорем Тощаковым</h3>
            </div>
            <img src="./Misha3.png" alt="" data-aos="fade-up" data-aos-delay="200" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section33;
