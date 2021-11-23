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
                <div className="col-3">
                    <img className="imgDos" src="/images/IMG_4820.jpg" alt="Foto gen 2" />
                </div>
                <div className="col-3">
                    <img className="imgDos" src="/images/IMG_4823.jpg" alt="Foto gen 2" />
                </div>
                <div className="col-6 ">

                    <form>
                        <h2 id="inicio">Iniciar sesión</h2>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Correo electrónico" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <input type="password" className="form-control" id="inputPassword3" placeholder="Contraseña" />
                            </div>
                        </div>
                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                        <label className="form-check-label" for="gridCheck1"> Recordar usuario
                        </label>
                        <br />
                        <button type="submit" className="btn btn-primary">Iniciar sesión</button>

                    </form>
                </div>

            </div>

        </div>
    )
}

export default mainPage
