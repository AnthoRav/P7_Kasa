import React from 'react'
import InfosCSS from '../Infos/Infos.module.css'
import FullStar from '../../assets/full_star.png'
import EmptyStar from '../../assets/empty_star.png'

function Infos({ infos }) {

    const scaleRating = infos.rating
    const rating = []
    for(let i = 1; i <= 5; i++) {
        if(i <= scaleRating) {
        rating[i] = true
        } else {
           rating[i] = false 
        }
    }

  return (
    <div className={InfosCSS.container}>
        <div className={InfosCSS.infoLeft}>
            <div className={InfosCSS.title}>
                {infos.title}
            </div>
            <div className={InfosCSS.location}>
                {infos.location}
            </div>
            <div className={InfosCSS.tags}>
                {infos.tags.map((tag) => (
                    <div className={InfosCSS.tag} key={tag+infos.id} >{tag}</div>
                ))}
            </div>
        </div>
        <div className={InfosCSS.infoRight}>
            <div className={InfosCSS.hostInfo}>
                <div className={InfosCSS.hostName}>
                    {infos.host.name}
                </div>
                <div className={InfosCSS.hostPicContainer}>
                    <img className={InfosCSS.hostPicture} src={infos.host.picture} alt= 'Photo du propriétaire du logment' />
                </div>
            </div>
            <div className={InfosCSS.rating}>
                {rating.map((stars, index) => 
                <img className={InfosCSS.star}
                key={stars+infos.id+index} 
                src={stars ? FullStar : EmptyStar}
                alt={stars ? 'étoile pleine' : 'étoile vide'}
                 />
                )}
            </div>
        </div>
    </div>
  )
}

export default Infos