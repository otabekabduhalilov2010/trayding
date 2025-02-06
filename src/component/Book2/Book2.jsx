import React, { useEffect } from 'react';
import s from './Book2.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Book2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={s.section} data-aos="fade-up">
      <div className="container">
        <h2 className={s.title} data-aos="fade-right"><span className={s.highlight}>О</span> КНИГЕ</h2>
        <div className={s.wrap} data-aos="fade-left">
          <div className={s.authorInfo} data-aos="zoom-in">
            <img className={s.avatar} src="./Igor.png" alt="Игорь Тощаков" />
            <div>
              <h3 className={s.authorName}>ИГОРЬ ТОЩАКОВ</h3>
              <p className={s.authorRole}>Автор книги</p>
            </div>
          </div>
          <p className={s.description} data-aos="fade-up">
            Основная идея моего авторского метода заключается в том, что делать прогнозы или же даже иметь какое-то мнение по рынку спекулянт вовсе не должен. Вместо этого можно торговать по торговым шаблонам, которые представляют собой стандартные трейдинговые стратегии для стандартных рыночных ситуаций... если какая-то текущая рыночная картина идентифицируется как стандарт, то к ней предлагается готовая стратегия...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Book2;
