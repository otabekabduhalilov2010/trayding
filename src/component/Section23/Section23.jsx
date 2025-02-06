import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Section23.module.scss';

const Section23 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={s.section} data-aos="fade-up">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-delay="100">
          <span className={s.highlight}>КАК ПРОХОДИТ</span> ОБУЧЕНИЕ
        </h2>
        <div className={s.steps}>
          {[ 
            {
              number: '1',
              title: 'Изучаете лекции курса',
              description: 'В курсе только практические видеоуроки.',
            },
            {
              number: '2',
              title: 'Выполняете практические задания',
              description: 'В том темпе, в котором вам удобно.',
            },
            {
              number: '3',
              title: 'Работаете с преподавателем',
              description: 'И получаете индивидуальные ответы на вопросы.',
            },
            {
              number: '4',
              title: 'Закрепляете полученные знания',
              description: 'Каждую субботу в формате онлайн-интерактива.',
            },
          ].map((step, index) => (
            <div key={index} className={s.step} data-aos="fade-up" data-aos-delay={(index + 1) * 200}>
              <div className={s.circle}>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index === 3 && <div className={s.checkmark}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section23;
