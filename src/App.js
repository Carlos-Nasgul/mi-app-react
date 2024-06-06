import "./hojas-de-estilo/App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Probando React</h1>
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

export default App;
