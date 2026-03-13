import React from 'react'
import '../App.css'

const Card = ({header, body, image}) => {
    return(
        <div className='Card'>
            <div className='Card-image'>
                <img src={image} alt="Imagen del producto" />
            </div>
            <div className='Card-Body'>
                <h2>{header}</h2>
                <hr />
                <h3>{body}</h3>
            </div>
        </div>
    );
}

export default Card