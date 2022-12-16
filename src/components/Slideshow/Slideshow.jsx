import React from 'react'
import { useState } from "react"
import SlideshowCSS from '../Slideshow/Slideshow.module.css'
import leftArrow from '../../assets/left_arrow.png'
import rightArrow from '../../assets/right_arrow.png'

function Slideshow({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    //const noArrow = []
    
    return (
        <div className={SlideshowCSS.container}>
            <div className={SlideshowCSS.slider}>
                <img 
                 key={images.id}
                 src={images[currentIndex]}
                 alt={images.title}
                 className={SlideshowCSS.image}
                />
            </div>
            <img src={images.length === 1 ? null : leftArrow}
                alt={images.length === 1 ? null : "flèche gauche"}
                className={SlideshowCSS.leftArrow} onClick={goToPrevious} 
            />
            <div className={SlideshowCSS.number}>
            {currentIndex + 1}/{images.length}
            </div>
            <img src ={images.length === 1 ? null : rightArrow}
                alt={images.length === 1 ? null : "flèche droite" }
                className={SlideshowCSS.rightArrow} onClick={goToNext} 
            />
        </div>
    )
}

export default Slideshow