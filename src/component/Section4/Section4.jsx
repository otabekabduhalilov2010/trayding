import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Section4.module.scss';

const steps = [
  'Прочтите книгу «Forex – игра на деньги»',
  'Получите представление об основных терминах и понятиях в трейдинге',
  'Пройдите курс для начинающих трейдеров',
  'Пройдите курс для профессионалов',
  'Изучите торговые шаблоны',
  'Трейдинг – это постоянное обучение. Не останавливайтесь. Никогда',
  'Выработайте свою собственную стратегию торговли',
  'Участвуйте в еженедельных субботних интерактивах',
  'Адаптируйте их под свой стиль торговли',
  'Изучите основы в психологии трейдинга'
];

const Section4 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="container">
      <section className={s.section}>
        <div 
          className={s.header} 
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <h2 
            className={s.title}
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            КАК НАЧАТЬ
          </h2>
          <h3 
            className={s.subtitle}
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            УСПЕШНО ТОРГОВАТЬ НА ФОНДОВОМ РЫНКЕ
          </h3>
        </div>
        <div className={s.stepsContainer}>
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={s.stepItem}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 150}
              data-aos-duration="1200"
              data-aos-anchor-placement="center-bottom"
            >
              <div 
                className={s.checkmark}
                data-aos="zoom-in"
                data-aos-delay={index * 150 + 200}
                data-aos-duration="800"
              >
                ✓
              </div>
              <p 
                className={s.stepText}
                data-aos="fade-up"
                data-aos-delay={index * 150 + 400}
                data-aos-duration="800"
              >
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Section4;