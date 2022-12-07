import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse/Collapse'
import Slideshow from '../../components/Slideshow/Slideshow'
import LodgingCardCSS from '../LodgingCard/LodgingCard.module.css'
import Lodgings from '../../lodgings.json'
import Infos from '../../components/Infos/Infos'

function LodgingCard() {
    let { id } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
         let lodging = Lodgings.find((lodging) => id === lodging.id)
         if (!lodging) {
          navigate ("/*" )
         }
    });

    return (
        <div>
            {Lodgings.filter((lodging) => lodging.id === id).map(
               (lodging, index) => (
                <div>
                    <Slideshow key={lodging.pictures.toString()} images={lodging.pictures} />
                    <Infos key={lodging.title} infos={lodging} />
                        <div className={LodgingCardCSS.collapse}>
                            <Collapse 
                                key={lodging.description}
                                title='Description' 
                                content={lodging.description} 
                            />
                            <Collapse 
                                key={lodging.equipments}
                                title='Equipements' 
                                content={lodging.equipments.map((equipments) => (
                                  <div key={equipments+lodging.id}>{equipments}</div>
                               ))} 
                            />
                        </div>
                </div>
               ))}
        </div>
    )
}

export default LodgingCard