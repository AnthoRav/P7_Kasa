import React from 'react'
import BannerCSS from '../Banner/Banner.module.css'

function Banner({src, title, alt}) {
  return (
    <div className={BannerCSS.banner}>
        <img className={BannerCSS.img} src={src} alt={alt} />
        <h1 className={BannerCSS.title}>{title}</h1>
    </div>
  )
}

export default Banner