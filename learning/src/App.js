import React, {Fragment} from 'react';
import "./styles/styles.scss";
import Curso from './Curso';
import Banner from './Banner';
import Formulario from './Formulario';


// const App = () => <h1>Hola Mundo desde mi archivo App.js</h1>

const cursos = [
  {
    "title": "React desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    "price": 30,
    "profesor": "Beto Quiroga"
  },{
    "title": "React - Rutas, APIs & Hooks",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20peticiones%20hooks.png",
    "price": 30,
    "profesor": "Beto Quiroga"
  },{
    "title": "React - Manejo del estado de la aplicación",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png",
    "price": 30,
    "profesor": "Beto Quiroga"
  },{
    "title": "Plataforma de educación online con React.js",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20plataforma%20de%20cursos.png",
    "price": 40,
    "profesor": "Beto Quiroga"
  }
]


const App = () => (
  <Fragment>
    <Banner />
    <div className="ed-grid m-grid-3">
      {
        cursos  .map(curso => <Curso title={curso.title} image={curso.image} price={curso.price} profesor={curso.profesor} />)
      }
    </div>
    <Formulario name={"Contacto"}/>
  </Fragment>
);

export default App;

//REGLAS JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver un solo elemento padre
// 3: Apoyarse de los fragment para devolver mas de un elemento