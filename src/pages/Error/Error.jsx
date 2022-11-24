import React from 'react'
import ErrorCSS from '../Error/Error.module.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className={ErrorCSS.container}>
        <h1 className={ErrorCSS.h1}>404</h1>
        <p className={ErrorCSS.text}>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/' className={ErrorCSS.link}>Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Error