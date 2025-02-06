import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Section2.module.scss';

const Section2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={s.section2} data-aos="fade-up">
      <div className="container">
        <div className={s.wrap}>
          <img
            className={s.igor}
            src="./Игорь 2.png"
            alt="Автор изображения"
            data-aos="zoom-in"
          />
          <div className={s.title}>
            <h1 data-aos="fade-right">
              Автор «ДИСКРЕТНО- <br />
              СИСТЕМАТИЧЕСКОГО <br />
              МЕТОДА ИГРОК»
            </h1>
            <div className={s.text} data-aos="fade-left">
              <img src="./galachka.png" alt="Галочка" />
              <p> Управлял самым прибыльным в мире FOREX-специализированным инвестиционным фондом «NorthStar Global Fund, L.P.» (Bellevue, WA, USA)</p>
            </div>
            <div className={s.text} data-aos="fade-left" data-aos-delay="100">
              <img src="./galachka.png" alt="Галочка" />
              <p> Максимальный объём капитала, бывшего когда-либо под индивидуальным управлением: $200 миллионов.</p>
            </div>
            <div className={s.text} data-aos="fade-left" data-aos-delay="200">
              <img src="./galachka.png" alt="Галочка" />
              <p> Автор-разработчик оригинального «Метода Торговых Шаблонов Игрока» («Igrok Method of Trading Templates»), который применяется самим автором, его учениками и последователями в практическом трейдинге на различных финансовых рынках до настоящего времени.</p>
            </div>
            <div className={s.text} data-aos="fade-left" data-aos-delay="300">
              <img src="./galachka.png" alt="Галочка" />
              <p> Автор трёх изданных в США книг на английском языке, одна из которых была также переведена и издана на русском и японском языках, а также ряда статей, опубликованных в различных англоязычных профильных журналах и на тематических форумах.</p>
            </div>
            <div className={s.text} data-aos="fade-left" data-aos-delay="400">
              <img src="./galachka.png" alt="Галочка" />
              <p>Опыт торговли на фондовом рынке более 30 лет. Начал торговать тогда, когда ещё не было компьютеров, а котировки передавались через спутник.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
