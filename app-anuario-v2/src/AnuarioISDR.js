import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './mainPage.css';

import Mensajes from './components/mensajes';

function Anuario() {
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        fetch('http://18.234.222.26:8080/publicaciones')
        .then(res=>res.json())
          .then(datos=>{
            //console.log(datos)
            setPublicaciones(datos.publicacion)
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
                        {publicaciones.map(publicacion => {
                            return <Mensajes publication={publicacion}></Mensajes>;
                        })}
            </div>
        </div>
    )
}

export default Anuario;
