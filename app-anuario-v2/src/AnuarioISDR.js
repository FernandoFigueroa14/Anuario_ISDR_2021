import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './mainPage.css';

import Mensajes from './components/mensajes';

function anuario() {
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

export default anuario;
