import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import s from './Header.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

  
  useEffect(() => {
    AOS.init({
        duration: 1000,  // Длительность анимации
        once: true,      // Анимации будут срабатывать только один раз
        easing: 'ease-in-out', // Тип анимации
    });
}, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <div className={s.menu}>
            <div className={s.link}>
              {/* Добавляем ссылку на главную страницу */}
              <Link to="/">
                <img src="./Logo.png" alt="Логотип" />
              </Link>
              <Link data-aos="fade-down" to="/about">Об авторе</Link>
              <Link data-aos="fade-up" to="/learning">Обучение</Link>
              <Link data-aos="fade-down" to="/community">Сообщество</Link>
              <Link data-aos="fade-up" to="/book">Книга</Link>
            </div>
            <div className={s.slk}>
            <a href="https://t.me/Zeronight706">Связаться</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
