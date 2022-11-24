import React, { useState } from 'react';
import './style.css';
import db from './firebase';
import { collection, addDoc } from "firebase/firestore"; 


export default function App() {

  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')
  const [data, setData] = useState(null)

  const handleChangeName = (event) => {
    const { value } = event.target
    setName(value)
  }

  const handleChangeWhatsapp = (event) => {
    const { value } = event.target
    setWhatsapp(value)
  }

  const handleChangeEmail = (event) => {
    const { value } = event.target
    setEmail(value)
  }

  const sendRequest = async () => {
    const docRef = await addDoc(collection(db, "dataUser"), {
      name: name,
      whatsapp: whatsapp,
      email: email
    });
  }

  return (
    <div>
      <h1>POC Formulario Captação</h1>
      <form >
        <label htmlFor="inName">Nome: </label>
        <input onChange={handleChangeName} type="text" value={name}></input>
        <br></br>
        <br></br>
        <label htmlFor="inEmail"> E-mail: </label>
        <input type="text" onChange={handleChangeEmail} value={email}></input>
        <br></br>
        <br></br>
        <label htmlFor="inContato"> Whatsapp: </label>
        <input type="text" onChange={handleChangeWhatsapp} value={whatsapp}></input>
        <br></br>
        <br></br>
        <button onClick={sendRequest} type="button">Enviar</button>
      </form>
    </div>
  );
}
