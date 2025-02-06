import React from 'react'
import s from './Tarifs.module.scss'

import Data from "./Data.js"
import Card from '../Card/Card.jsx'

const Tarifs = () => {
  return (
    <>

    <section className={s.tarifs}>
        <div className="container">
            <div className={s.wrap}>
             {Data.map(item => (
                <Card key={item.id} title={item.title} text={item.text} image={item.image} />
             ))}
            </div>
        </div>
    </section>

    </>
  )
}

export default Tarifs