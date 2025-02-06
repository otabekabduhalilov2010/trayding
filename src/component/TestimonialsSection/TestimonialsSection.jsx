import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './TestimonialsSection.module.scss';

const testimonials = [
  {
    name: 'Николай С.',
    date: '1 день назад',
    rating: 5,
    text: 'Год торговал по методе [Grokka, Рад], что прошел эту программу. 100% выжимка.'
  },
  {
    name: 'Ирина К.',
    date: '1 день назад',
    rating: 5,
    text: 'Стала понимать логику рынка, приобрела торговую дисциплину и вышла на стабильные +20% к депо.'
  }
];

const StarRating = ({ count }) => (
  <div className={s.stars} data-aos="fade-in">
    {Array.from({ length: count }).map((_, index) => (
      <span key={index}>&#9733;</span> // Unicode star character
    ))}
  </div>
);

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={s.testimonialsSection} data-aos="fade-up">
      <div className={s.navigation}>
        <button className={s.navButton} data-aos="fade-right">&#8249;</button>
        <div className={s.testimonials}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={s.testimonialCard} data-aos="zoom-in" data-aos-delay={(index + 1) * 200}>
              <h3 className={s.name}>{testimonial.name}</h3>
              <p className={s.date}>{testimonial.date}</p>
              <StarRating count={testimonial.rating} />
              <p className={s.text}>{testimonial.text}</p>
            </div>
          ))}
        </div>
        <button className={s.navButton} data-aos="fade-left">&#8250;</button>
      </div>
    </div>
  );
};

export default TestimonialsSection;
