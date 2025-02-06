import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Section24.module.scss';

const Section24 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={s.section} data-aos="fade-up">
      <div className="container">
        <div className={s.wrap}>
          <h2 data-aos="fade-up" data-aos-delay="100">
            Стань частью крупнейшего трейдинг сообщества <br />
            и начни торговать на криптовалютном рынке уже сейчас
          </h2>
          <a href="https://t.me/ananimusO706" data-aos="fade-up" data-aos-delay="200">Вступить в сообщество</a>

          <div className={s.stats}>
            <div className={s.stat} data-aos="fade-up" data-aos-delay="300">
              <span>11</span>
              <p>месяцев торговли и +</p>
            </div>
            <div className={s.stat} data-aos="fade-up" data-aos-delay="400">
              <span>10 000+</span>
              <p>участников сообщества</p>
            </div>
            <div className={s.stat} data-aos="fade-up" data-aos-delay="500">
              <span>5+</span>
              <p>лет на криптовалютном рынке</p>
            </div>
          </div>

          <div className={s.cards}>
            {[ 
              { icon: '👥', title: 'Комьюнити', desc: 'Вы попадёте в команду единомышленников, которые стремятся достичь успеха.' },
              { icon: '📈', title: 'Торговые сигналы', desc: 'Вы получите торговые сигналы успешных трейдеров, приносящих более 900% годовых.' },
              { icon: '💼', title: 'Кейсы', desc: 'Мы делимся новыми новостями и кейсами, на которых мы пытаемся заработать.' },
              { icon: '🎓', title: 'Обучение', desc: 'Если вы начинающий, то работа с нами улучшит ваши навыки в разы!' },
            ].map((item, index) => (
              <div key={index} className={s.card} data-aos="fade-up" data-aos-delay={(index + 1) * 200}>
                <div className={s.icon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section24;
