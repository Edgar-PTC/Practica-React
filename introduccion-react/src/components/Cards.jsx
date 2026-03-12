import React from 'react'
import '../App.css'

const Card = ({header, body}) => {
    return(
        <div>
            <div class="card cardshover">
            <div class="card-body">
                <h5 class="card-title">{header}</h5>
                <p class="card-text">{body}</p>
            </div>
            </div>
        </div>
    );
}

export default Card