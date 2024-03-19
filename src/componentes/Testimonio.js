//PRIMER COMPONENTE

import React from 'react';
import '../hojas-de-estilo/Testimonio.css'


function Testimonio() {
    return (
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require('../imagenes/hacker.png')} />
            <div className='contenido-testimonio'>
                <p className='nombre-testimonio'>Carlos García</p>
                <p className='cargo-testimonio'>Desarrollo web</p>
                <p className='texto-testimonio'>Estudiante de bla bla bla,
                    danza y teatro y los domingos matemáticas</p>
            </div>
        </div>
    );
}

export default Testimonio;