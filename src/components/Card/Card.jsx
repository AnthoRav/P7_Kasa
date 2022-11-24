import React from 'react'
import { Link } from 'react-router-dom'
import CardCSS from '../Card/Card.module.css'
import Lodgings from '../../lodgings.json'

function Card() {
  return (
    <div className={CardCSS.gallery}>
        {Lodgings.map((lodging) => (
            <Link to={`/lodgings/${lodging.id}`} key={lodging.id}>
                <div className={CardCSS.card}>
                    <img src={lodging.cover} alt={lodging.title} className={CardCSS.cover} />
                    <div className={CardCSS.title}>{lodging.title}</div>
                    
                </div>
            </Link>
        ))}
    </div>
  )
}

export default Card