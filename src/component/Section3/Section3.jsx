import React from 'react';
import { motion } from 'framer-motion';
import s from './Section3.module.scss';

const Section3 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      backgroundColor: "#9A24D2",
      boxShadow: "0px 10px 60px rgba(210, 36, 207, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const cards = [
    {
      icon: "./fa_book.png",
      title: "Книга «Forex игра на деньги»",
      description: "Как определить и получить прибыль от высоких процентных рыночных моделей"
    },
    {
      icon: "./pan.png",
      title: "Курс для начинающих трейдеров",
      description: "Прочный фундамент свободы"
    },
    {
      icon: "./medal.png",
      title: "Курс для профессиональных трейдеров",
      description: "Расширяем горизонты познания"
    },
    {
      icon: "./protsent.png",
      title: "Ежедневные интерактивные занятия",
      description: "Торговая разведка и построение недельной стратегии"
    }
  ];

  return (
    <motion.section 
      className={s.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className={s.wrap}>
          <motion.div className={s.cards}>
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className={s.card}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <motion.img
                  src={card.icon}
                  alt={card.title}
                  variants={iconVariants}
                  whileHover="hover"
                />
                <motion.h1
                  variants={titleVariants}
                  dangerouslySetInnerHTML={{ __html: card.title.replace(/\n/g, '<br>') }}
                />
                <motion.p
                  variants={paragraphVariants}
                  dangerouslySetInnerHTML={{ __html: card.description.replace(/\n/g, '<br>') }}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div className={s.title} variants={containerVariants}>
            <motion.h1 variants={titleVariants}>АВТОРСКИЕ ПРОГРАММЫ</motion.h1>
            <motion.h3 variants={titleVariants}>проблематика начинающих трейдеров</motion.h3>
            
            {[
              "У тех, кто плохо знаком с предметом, биржа всегда вызывает немало трепетного и вдохновенного романтизма. Такое отношение связано с иллюзией о том, что биржа – это всегда большие деньги. Данный образ создан прессой, литературой и Голливудом, и он мало что имеет общего с реальностью.",
              "Для того, чтобы начать зарабатывать на фондовым рынке необходимо обладать статистическим преимуществом, которое позволит Вам войти в те заветные 5 процентов счастливчиков.",
              "Что бы его получить, необходимо пройти тернистый путь от основ к первым удачным сделкам на бирже. Это может быть год, два убыточной торговли и не один слитый депозит.",
              "Мы предлагаем Вам образовательную программу, которая включает в себя весь тридцатилетний опыт профессионального трейдера",
              "а так же его авторские шаблоны для исключения ошибок, которые так часто возникают из-за человеческой психологии."
            ].map((text, index) => (
              <motion.p
                key={index}
                variants={paragraphVariants}
                custom={index}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section3;