import React from 'react';
import { motion } from 'framer-motion';
import s from './Section1.module.scss';

const Section1 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 10px 60px rgba(154, 36, 210, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 10px 60px rgba(154, 36, 210, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className={s.section}>
      <div className="container">
        <motion.div 
          className={s.wrap}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p variants={itemVariants}>
            Остроумная торговля по
          </motion.p>
          
          <motion.h5 
            variants={badgeVariants}
            whileHover="hover"
          >
            методу igroka
          </motion.h5>
          
          <motion.h1 variants={titleVariants}>
            платформа <br /> подготовки <br /> трейдеров
          </motion.h1>
          
          <motion.p variants={itemVariants}>
            Получи статистическое преимущество <br /> на фондовой бирже уже сегодня
          </motion.p>
          
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Пробный урок 
            <motion.img 
              src="./clik.png" 
              alt=""
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;