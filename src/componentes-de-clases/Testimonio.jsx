//PRIMER COMPONENTE, voy a sustituir la function por un 'componente de clase'

import React from "react";
import "../hojas-de-estilo/Testimonio.css";

//Aquí escribo el compte. clase y luego anulo la función.

//-->Tengo que 'retornar' render obligado y luego retorno JSX y añado this.props.'propieda'<--

class Testimonio extends React.Component {
  render() {
    return (
      <div className="contenedor-testimonio">
        <img
          className="imagen-testimonio"
          src={require(`../imagenes/${this.props.imagen}.png`)}
          alt={`Foto de ${this.props.nombre}`} //"foto de perfil" la he personalizado.
        />
        <div className="contenido-testimonio">
          <p className="nombre-testimonio">
            {this.props.nombre} en {this.props.pais}
          </p>
          <p className="cargo-testimonio">{this.props.cargo}</p>
          <p className="texto-testimonio">"{this.props.testimonio}"</p>
        </div>
      </div>
    );
  }
}

//function Testimonio(props) {*}  <-- todo estaba aquí dentro* return()

export default Testimonio;

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
