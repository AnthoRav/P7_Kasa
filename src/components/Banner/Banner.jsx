import React from 'react'
import { useLocation } from 'react-router-dom'
import BannerCSS from '../Banner/Banner.module.css'

// function pour detecter le url si il contien le mot "about"

function Banner({ src, title, alt }) {
  const location = useLocation()

  // console.log(location.pathname)

  const aboutLocation = () => {
    // location.pathname === '/about'
    //   ? console.log('about !!')
    //   : console.log('pas about !')
    if (location.pathname === '/about') {
      //console.log('about !!')
      return true
    } else {
      //console.log('pas about !')
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