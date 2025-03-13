import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import s from './Header.module.scss';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const navLinks = [
    { to: '/about', text: 'Об авторе' },
    { to: '/learning', text: 'Обучение' },
    { to: '/community', text: 'Сообщество' },
    { to: '/book', text: 'Книга' },
    { href: 'https://t.me/nikita_kremlev', text: 'Связаться' },
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.header className={s.header} initial="hidden" animate="visible" variants={headerVariants}>
      <div className="container">
        <nav className={s.nav}>
          <div className={s.menu}>
            <motion.div className={s.logo} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/">
                <img src="/Logo.png" alt="Логотип" />
              </Link>
            </motion.div>

            <div className={s.link}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.text}
                  custom={i}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' } }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.href ? <a href={link.href}>{link.text}</a> : <Link to={link.to}>{link.text}</Link>}
                </motion.div>
              ))}
            </div>

            <motion.div className={`${s.burger} ${dropdownOpen ? s.active : ''}`} onClick={toggleDropdown} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <span></span>
              <span></span>
              <span></span>
            </motion.div>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  className={`${s.fullscreenMenu} ${dropdownOpen ? s.open : ''}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: 'easeInOut' } }}
                >
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } }}
                      whileHover={{ scale: 1.1, color: '#00FFB2' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.href ? <a href={link.href} onClick={toggleDropdown}>{link.text}</a> : <Link to={link.to} onClick={toggleDropdown}>{link.text}</Link>}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;