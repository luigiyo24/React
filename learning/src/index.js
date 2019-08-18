import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const root =document.getElementById("root");
const parrafo = document.getElementById("parrafo");
// const elemento = React.createElement(componente, propiedades, hijos);
// const elemento = React.createElement("h1", {className:"saludo"}, "Hola Mundo");7



ReactDOM.render( <h1 className="saludos"> Hola desde React JSX </h1>, root);
ReactDOM.render( <App />,parrafo);
