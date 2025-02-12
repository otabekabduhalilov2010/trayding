import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Section6.module.scss';

const Section6 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className={s.section} data-aos="fade-up">
        <div className="container">
          <div className={s.wrap}>
            <div className={s.title} data-aos="fade-right">
              <h1>Вступить в сообщество <br /> профессионалов</h1>
              <p>Чат, созданный для единомышленников <br /> и последователей метода Игоря Тощакова</p>
                <a  data-aos="zoom-in" href="https://t.me/+CYwJbsxF9Co2NzMy">Вступить в чат </a>
            </div>
            <div className={s.phone} data-aos="fade-left">
              <img className={s.phone} src="./telefoni.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section6;
