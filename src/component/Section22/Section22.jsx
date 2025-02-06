import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Section22.module.scss';

const Section22 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrap}>
          <h2 data-aos="fade-up">
            <span className={styles.highlight}>ЧЕМУ</span> ВЫ НАУЧИТЕСЬ
          </h2>
          <div className={styles.list}>
            <div className={styles.item} data-aos="fade-up" data-aos-delay="100">
              <span className={styles.number}>1</span>
              <p>
                Подробно ознакомьтесь с авторским методом <br />
                графического анализа и научитесь строить <br />
                автоматически и инвестиционные стратегии <br />
                на различных временных промежутках
              </p>
            </div>
            <div className={styles.item} data-aos="fade-up" data-aos-delay="200">
              <span className={styles.number}>2</span>
              <p>
                Освоив метод, вы также научитесь более <br />
                точно прогнозировать поведение финансовых рынков и <br />
                улучшать положение в общем состоянии <br />
                экономики, как в каждый данный момент, так и на перспективу.
              </p>
            </div>
            <div className={styles.item} data-aos="fade-up" data-aos-delay="300">
              <span className={styles.number}>3</span>
              <p>
                Сможете торговать наиболее комфортно именно <br />
                для себя манере, тем самым избегая <br />
                «эффекта леммингов» <br />
                и фактора «Черного лебедя».
              </p>
            </div>
            <div className={styles.item} data-aos="fade-up" data-aos-delay="400">
              <span className={styles.number}>4</span>
              <p>
                Получите практическую возможность избежать <br />
                многих ошибок и эффективно <br />
                контролировать свой <br />
                инвестиционный капитал.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section22;
