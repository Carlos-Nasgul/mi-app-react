import React from "react";
import "./hojas-de-estilo/App.css";
import Testimonio from "./componentes-de-clases/Testimonio";

//otro componente de Clase

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="contenedor-principal">
          <h1>Probando React | Esto es lo que dicen nuestros amigos</h1>
          <Testimonio
            nombre="Carlos García"
            pais="España"
            imagen="foto-del-comodin"
            cargo="Estudiante de Desarrollo web"
            testimonio="Hola, aunque soy profesor de autoescuela de profesión
                soy un apasionado de la programación, el desarrollo y el diseño web,
                y en gran parte gracias a freeCodeCamp."
          />
          <Testimonio
            nombre="Paco Pérez"
            pais="Mexico"
            imagen="hacker"
            cargo="Desarrollador Full-stack"
            testimonio="Gracias a freeCodeCamp empecé una carrera que no acaba nunca.
            Muchas gracias amigos por vuestra formación gratuita y de calidad."
          />
          <Testimonio
            nombre="Robert deNiro"
            pais="E.E.U.U."
            imagen="hacker"
            cargo="Actor Film-stack"
            testimonio="Gracias a freeCodeCamp empecé una carrera que no acaba nunca.
            Muchas gracias amigos por vuestra formación gratuita y de calidad."
          />
        </div>
      </div>
    );
  }
}

//function App() {*} Todo estaba aquí dentro de las llaves de la función,
// lo he cortado y pegado dentro de render

export default App;
