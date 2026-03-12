import React, { PureComponent } from 'react'
import '../App.css'

const Boton = ({titulo, accion}) => {
    return (
        <button
        className="estiloB" onClick={accion}>
            {titulo}
        </button>
    )
}

export default Boton