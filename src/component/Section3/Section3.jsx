import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import s from './Section3.module.scss';

const Section3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={s.section} data-aos="fade-up">
      <div className="container">
        <div className={s.wrap}>
          <div className={s.cards}>
            <div className={s.card} data-aos="flip-left">
              <img src="./fa_book.png" alt="Книга" />
              <h1>Книга «Forex <br /> игра на деньги»</h1>
              <p>Как определить и получить прибыль от <br /> высоких процентных <br /> рыночных моделей</p>
            </div>
            <div className={s.card} data-aos="flip-left" data-aos-delay="100">
              <img src="./pan.png" alt="Курс для начинающих" />
              <h1>Курс для <br /> начинающих трейдеров</h1>
              <p>Прочный фундамент свободы</p>
            </div>
            <div className={s.card} data-aos="flip-left" data-aos-delay="200">
              <img src="./medal.png" alt="Курс для профессионалов" />
              <h1>Курс для <br /> профессиональных трейдеров</h1>
              <p>Расширяем <br /> горизонты познания</p>
            </div>
            <div className={s.card} data-aos="flip-left" data-aos-delay="300">
              <img src="./protsent.png" alt="Ежедневные занятия" />
              <h1>Ежедневные <br /> интерактивные занятия</h1>
              <p>Торговая разведка и <br /> построение недельной стратегии</p>
            </div>
          </div>
          <div className={s.title} data-aos="fade-right">
            <h1>АВТОРСКИЕ ПРОГРАММЫ</h1>
            <h3>проблематика начинающих трейдеров</h3>
            <p>У тех, кто плохо знаком с предметом, биржа всегда вызывает немало трепетного и вдохновенного романтизма. Такое отношение связано с иллюзией о том, что биржа – это всегда большие деньги. Данный образ создан прессой, литературой и Голливудом, и он мало что имеет общего с реальностью.</p>
            <p>Для того, чтобы начать зарабатывать на фондовым рынке необходимо обладать статистическим преимуществом, которое позволит Вам войти в те заветные 5 процентов счастливчиков.</p>
            <p>Что бы его получить, необходимо пройти тернистый путь от основ к первым удачным сделкам на бирже. Это может быть год, два убыточной торговли и не один слитый депозит.</p>
            <p>Мы предлагаем Вам образовательную программу, которая включает в себя весь тридцатилетний опыт профессионального трейдера</p>
            <p>а так же его авторские шаблоны для исключения ошибок, которые так часто возникают из-за человеческой психологии.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;