import React from 'react';
import './style.css';

export default function App() {

let storesName = 


  return (
    <div>
      <h1>POC Formulario Captação</h1>
      <form action="POST">
          <label htmlFor="inName">Nome: </label>
          <input type="text" id="name"></input>
        <br></br>
        <br></br>
          <label htmlFor="inEmail">E-mail: </label>
          <input type="text"></input>
        <br></br>
        <br></br>
          <label htmlFor="inContato">Whatsapp: </label>
          <input type="text"></input>
        <br></br>
        <br></br>
         <button>Enviar</button>
      </form>
    </div>
  );
}
