import React, { useEffect } from "react";
import styles from "./Section34.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Section34 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title} data-aos="fade-up">
          ТАРИФЫ ОБУЧЕНИЯ И СПОСОБЫ ОПЛАТЫ
        </h2>

        <div className={styles.wrap}>
          {/* Лайт Тариф */}
          <div className={styles.card1} data-aos="fade-right">
            <img src="./ruka.png" alt="" />
            <h3>ЛАЙТ</h3>
            <p className={styles.price}>4 990 руб./мес.</p>
            <ul className={styles.features}>
              <li>✔ Запись 4-х предыдущих суббот</li>
              <li>✔ Возможность задавать вопросы под видео</li>
            </ul>
            <a href="#" className={styles.button}>
              Принять участие
            </a>
          </div>

          {/* Доступ на 1 неделю */}
          <div className={`${styles.card} ${styles.cardHighlight}`} data-aos="zoom-in">
            <img src="./ruka.png" alt="" />
            <h3>ДОСТУП НА 1 НЕДЕЛЮ</h3>
            <p className={styles.price}>12 900 руб./нед.</p>
            <ul className={styles.features}>
              <li>✔ <strong>Доступ к субботнему интерактиву</strong></li>
              <li>✔ Запись интерактивов</li>
              <li>✔ Доступ в чат участников</li>
              <li>✔ Возможность задавать вопросы во время занятий</li>
            </ul>
            <a href="#" className={styles.button}>
              Принять участие
            </a>
          </div>

          {/* Доступ на 1 месяц */}
          <div className={`${styles.card} ${styles.cardGold}`} data-aos="fade-left">
            <img src="./trayding2.png" alt="" />
            <h3>ДОСТУП НА 1 МЕСЯЦ</h3>
            <p className={styles.price}>35 000 руб.</p>
            <ul className={styles.features}>
              <li>✔ <strong>Доступ к субботнему интерактиву</strong></li>
              <li>✔ Запись 4-х предыдущих суббот</li>
              <li>✔ Доступ в чат участников</li>
              <li>✔ Возможность задавать вопросы во время занятий</li>
            </ul>
            <a href="#" className={styles.button}>
              Принять участие
            </a>
          </div>
        </div>

        <p className={styles.footerText} data-aos="fade-up">
          Безусловная гарантия возврата в течение 14 дней | Ежемесячные автоматические платежи
        </p>
      </div>
    </section>
  );
};

export default Section34;
