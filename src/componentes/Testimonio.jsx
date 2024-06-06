//PRIMER COMPONENTE

import React from "react"; // YA NO HACE FALTA DESDE 2020

import "../hojas-de-estilo/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/${props.imagen}.png`)}
        alt="foto de perfil"
      />
      <div className="contenido-testimonio">
        <p className="nombre-testimonio">
          {props.nombre} en {props.pais}
        </p>
        <p className="cargo-testimonio">{props.cargo}</p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;

console.log("Hola React");

//SEGUNDO COMPONENTE
export function Fichero(props) {
  return (
    <Fichero
      nombre="Carlos García"
      pais="España"
      imagen="foto-del-comodin"
      cargo="Estudiante de Desarrollo web"
      testimonio="Hola, aunque soy profesor de autoescuela de profesión
        soy un apasionado de la programación, el desarrollo y el diseño web,
        y en gran parte gracias a freeCodeCamp."
    />
  );
}

//export default Fichero;
