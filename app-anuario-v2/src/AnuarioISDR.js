import React from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './mainPage.css';

import Mensajes from './components/mensajes';

function Anuario() {
    useEffect(() => {
        fetch('http://18.234.222.26:8080/usuarios')
        .then(res=>res.json())
          .then(datos=>{
            //console.log(datos)
            const usuarios=datos;
            //console.log(usuarios);
          })
          .catch(err=>{
            console.log("Servidor desconectado")
            console.log(err)
          }) 
    },[]);

    return (
        <div className="mainPage">
            <div className="declaracion">
                <h2>Todos los comentarios</h2>
                <h3>Aquí están todos los comentarios que componen este anuario</h3>
            </div>
            <div className="buffer">
                <Mensajes />
                <Mensajes />
                <Mensajes />
                <Mensajes />
                <Mensajes />
                <Mensajes />
                <Mensajes />
                <Mensajes />
                <Mensajes />
                <Mensajes />
                <Mensajes />
                <Mensajes />
            </div>
        </div>
    )
}

export default Anuario;
