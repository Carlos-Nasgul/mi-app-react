//PRIMER COMPONENTE

//import React from 'react';
import '../hojas-de-estilo/Testimonio.css'


function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require(`../imagenes/${props.imagen}.png`)} alt='foto de perfil' />
            <div className='contenido-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo}</p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    );
}

export default Testimonio;

console.log('Hola React');


