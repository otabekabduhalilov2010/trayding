import React from 'react';
import s from './Book.module.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Book = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrap}>
          <div className={s.image} data-aos="fade-right">
            <img src="/book.png" alt="FOREX. Игра на деньги. Стратегии победы" />
            <button className={s.button}>Получить книгу</button>
          </div>
          <div className={s.content} data-aos="fade-left">
            <h2><span className={s.highlight}>FOREX.</span> ИГРА НА ДЕНЬГИ. СТРАТЕГИИ ПОБЕДЫ</h2>
            <div className={s.tags}>
              <span>Игорь Тошаков</span>
              <span>Трейдинг</span>
              <span>Инвестиции</span>
            </div>
            <div className={s.rating}>★★★★★</div>
            <h3>ОПИСАНИЕ</h3>
            <p>
              Подход и стратегия торговли на валютном рынке, предлагаемые профессиональным трейдером Игорем
              Тошаковым, напоминают о гамбите, используемом великими российскими шахматистами. Автор книги
              откровенно делится опытом успешной торговли на самом большом рынке в мире – Forex. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
