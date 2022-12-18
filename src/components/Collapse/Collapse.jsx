import React from 'react'
import { useState } from 'react'
import CollapseCSS from './Collapse.module.css'
import ArrowDrop from '../../assets/down_arrow.png'

function Collapse({title, content}) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className={CollapseCSS.container}>
            <div className={CollapseCSS.title} onClick= {() => setIsOpen(false)}>
                {title}
            <img className={CollapseCSS.arrow} src={ArrowDrop} alt="Flèche vers le bas" />
            </div>
            <div className={CollapseCSS.content}>
                {content}
            </div>
        </div>    
    ) : (
        <div className={CollapseCSS.container}>
            <div className={CollapseCSS.title} onClick= {() => setIsOpen(true)}>
                {title}
            <img className={CollapseCSS.arrowup} src={ArrowDrop} alt="Flèche vers le bas" />
            </div>
        </div>
    )
}

export default Collapse