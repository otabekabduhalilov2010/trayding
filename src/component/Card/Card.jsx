import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Card.module.scss';

const Card = ({ image, title, text }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={s.card} data-aos="fade-up">
      <img data-aos="fade-down" src={image} alt={title} />
      <h3 data-aos="fade-up" >{title}</h3>
      <p data-aos="fade-down" >{text}</p>
    </div>
  );
};

export default Card;
