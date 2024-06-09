// src/componentes/Fichero.jsx

// ToDo: INTENTO EL RETO DE DESPEJAR App.jsx para crear el componente Fichero

import React from "react";
import Testimonio from "./Testimonio";

function Fichero(props) {
  return (
    <Testimonio
      nombre={props.nombre}
      pais={props.pais}
      imagen={props.imagen}
      cargo={props.cargo}
      testimonio={props.testimonio}
    />
  );
}

export default Fichero;
