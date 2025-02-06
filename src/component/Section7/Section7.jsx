import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Section7.module.scss';

const reviews = [
  {
    name: 'ВЛАД',
    text: 'Игорь благодарность за открытие вебинаров Смотрим как Рабыню Изауру сыну отправил он в High school сейчас но уже 4 года торгует по вашей тематике Grade Primary обучал концепцию ГД это у него проект такой был. В общем ребенок купил себе Мустанг и совершенно финансово не зависим. Долгих вам лет и крепкого здоровья',
    image: '/VladM.png',
  },
  {
    name: 'ИГОРЬ ТОЩАКОВ',
    text: 'Получил сие только что от камрада Андрея... Горжусь учеником... Берите с него пример... А теперь цитата: "Игорь, добрый вечер! Сегодня у меня знаковый день... Я полностью отбил затраты на обучение... Ещё и сверх этого добавил... 26 мая этого года открыл первую позицию на Форексе... сейчас в хорошем плюсе... И всё это благодаря твоему курсу, заботе и вниманию о нас... Большое тебе спасибо!!" Так вот, я желаю получить нечто подобное от каждого камрада до конца сего года... А потому учитесь прилежно и действуйте внимательно.',
    image: '/IgorKvadrat.png',
  }
];

const Section7 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.section} data-aos="fade-up">
      <div className="container">
        <div className={styles.titleContainer} data-aos="fade-down">
          <h2 className={styles.title}>
            <span className={styles.highlight}>ОТЗЫВЫ</span> О КУРСЕ
          </h2>
          <h3 className={styles.subtitle}>ОТ УСПЕШНЫХ ТРЕЙДЕРОВ</h3>
        </div>
        <div className={styles.reviewsContainer}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard} data-aos="fade-right" data-aos-delay={(index + 1) * 200}>
              <img src={review.image} alt={review.name} className={styles.avatar} />
              <div className={styles.reviewContent}>
                <h4 className={styles.reviewName}>{review.name}</h4>
                <p className={styles.reviewText}>{review.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.button} data-aos="zoom-in">Все отзывы →</button>
      </div>
    </section>
  );
};

export default Section7;
