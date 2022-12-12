import React from 'react'
import { useLocation } from 'react-router-dom'
import BannerCSS from '../Banner/Banner.module.css'

function Banner({ src, title, alt }) {
    const location = useLocation()
    // console.log(location.pathname)
    // function pour detecter si l'url contient le mot "about"
  const aboutLocation = () => {
    if (location.pathname === '/about') {
      return true
    } else {
      return false
    }
  }

  return (
    <div className={aboutLocation() ? BannerCSS.bannerAbout : BannerCSS.banner}>
      <img className={BannerCSS.img} src={src} alt={alt} />
      <h1 className={BannerCSS.title}>{title}</h1>
    </div>
  )
}

export default Banner