import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Section6.module.scss';
import { MessageCircle } from 'lucide-react';

const Section6 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrap}>
          <div className={s.title}>
            <h1 
              data-aos="fade-right"
              data-aos-duration="1200"
              className={s.heading}
            >
              Вступить в сообщество <br /> профессионалов
            </h1>
            <p 
              data-aos="fade-up"
              data-aos-delay="200"
              className={s.description}
            >
              Чат, созданный для единомышленников <br /> и последователей метода Игоря Тощакова
            </p>
            <a  
              data-aos="zoom-in"
              data-aos-delay="400"
              href="https://t.me/+CYwJbsxF9Co2NzMy"
              className={s.joinButton}
            >
              <span>Вступить в чат</span>
              <MessageCircle className={s.icon} />
            </a>
            <div className={s.particles}>
              {[...Array(5)].map((_, i) => (
                <div key={i} className={s.particle} />
              ))}
            </div>
          </div>
          <div 
            className={s.phoneWrapper}
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className={s.phoneGlow} />
            <img 
              className={s.phone} 
              src="./telefoni.png" 
              alt="Mobile interface"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
            <div className={s.circles}>
              {[...Array(3)].map((_, i) => (
                <div key={i} className={s.circle} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;