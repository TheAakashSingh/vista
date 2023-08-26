import React from 'react'
import "./Carousole.css"
import revBoat from '../Images/revBoat.png'
const Carousole = ({ image, reviews, name }) => {
    return (
        <div className='Carousole'>
            <img src={image} alt="" />
            <img src={revBoat} alt="" />
            <span>
                {reviews}</span>
            <span>{name}</span>
        </div>
    )
}

export default Carousole