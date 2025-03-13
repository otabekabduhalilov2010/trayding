import React from 'react';
import { motion } from 'framer-motion';
import s from './Section2.module.scss';

const Section2 = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const checkmarkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      className={s.section2}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className={s.wrap}>
          <motion.div 
            className={s.imageWrapper}
            variants={imageVariants}
          >
            <motion.img
              className={s.igor}
              src="./Игорь 2.png"
              alt="Автор изображения"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <div className={s.title}>
            <motion.h1 variants={titleVariants}>
              Автор «ДИСКРЕТНО- <br />
              СИСТЕМАТИЧЕСКОГО <br />
              МЕТОДА ИГРОК»
            </motion.h1>

            {[
              "Управлял самым прибыльным в мире FOREX-специализированным инвестиционным фондом «NorthStar Global Fund, L.P.» (Bellevue, WA, USA)",
              "Максимальный объём капитала, бывшего когда-либо под индивидуальным управлением: $200 миллионов.",
              "Автор-разработчик оригинального «Метода Торговых Шаблонов Игрока» («Igrok Method of Trading Templates»), который применяется самим автором, его учениками и последователями в практическом трейдинге на различных финансовых рынках до настоящего времени.",
              "Автор трёх изданных в США книг на английском языке, одна из которых была также переведена и издана на русском и японском языках, а также ряда статей, опубликованных в различных англоязычных профильных журналах и на тематических форумах.",
              "Опыт торговли на фондовом рынке более 30 лет. Начал торговать тогда, когда ещё не было компьютеров, а котировки передавались через спутник."
            ].map((text, index) => (
              <motion.div 
                key={index}
                className={s.text}
                variants={textItemVariants}
                custom={index}
              >
                <motion.img 
                  src="./galachka.png" 
                  alt="Галочка"
                  variants={checkmarkVariants}
                />
                <motion.p>{text}</motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section2;