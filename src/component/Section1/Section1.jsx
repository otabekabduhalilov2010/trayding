import React from 'react'
import s from './Section1.module.scss'

const Section1 = () => {
  return (
   <>
   <section className={s.section}>
    <div className="container">
        <div data-aos="fade-down" className={s.wrap}>
            <p data-aos="fade-up" >Остроумная торговля по</p>
            <h5 data-aos="fade-left" >методу igroka</h5>
            <h1 data-aos="fade-left" >платформа <br /> подготовки <br /> трейдеров </h1>
            <p data-aos="fade-right" >Получи статистическое преимущество <br /> на фондовой бирже уже сегодня</p>
            <button data-aos="fade-up" >Пробный урок <img src="./clik.png" alt="" /></button>
        </div>
    </div>
   </section>
   </>
  )
}

export default Section1
