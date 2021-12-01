import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './mainPage.css';

import Mensajes from './components/mensajes';

function mainPage() {
    return (
        <div className="mainPage">
            <img src="/images/portadaUno.jpg" alt="Imagen de generacion" />
            <div className="declaracion">
                <h2>Queridos amigos,</h2>
                <h3>Como proyecto integrador de la materia de Apps Web, les queremos dar una pequeño anaurio digital... Este mismo esta pensado para que puedan expresar todos sus agradecimientos a sus amigos y profesores.</h3>
            </div>
            <div className="buffer">
                <Mensajes />
                <Mensajes />
                <Mensajes />
                <Mensajes />
            </div>

            <div className=" row inicioSes">
                <div class="col-3">
                    <img className="imgDos" src="/images/IMG_4820.jpg" alt="Foto gen 2" />
                </div>
                <div className="col-3">
                    <img className="imgDos" src="/images/IMG_4823.jpg" alt="Foto gen 2" />
                </div>
                <div class="col-6 ">
                    <h2>Iniciar sesión</h2>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default mainPage