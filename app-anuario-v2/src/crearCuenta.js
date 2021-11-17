import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './crearCuenta.css';

function crearCuenta() {
    return (
        <div className="crearCuenta
        ">

            <div className="row inicioSes ajuste2">

                <form>
                    <h2 id="inicio">Crear mi cuenta</h2>
                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <input type="text" class="form-control formatoIn" id="nombre" placeholder="Tu nombre" />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <input type="text" class="form-control formatoIn" id="apellido" placeholder="Tus apellidos" />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <input type="email" class="form-control formatoIn" id="correo" placeholder="Correo electrónico" />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <input type="password" class="form-control formatoIn" id="contraseña" placeholder="Contraseña" />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <input type="text" class="form-control formatoIn" id="username" placeholder="Username" />
                        </div>
                    </div>
                    <h6>Sube tu foto de perfil</h6>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="inputGroupFile01" />
                    </div>


                    <button type="submit" class="btn btn-primary">Registrarme</button>
                </form>

            </div>

        </div>
    )
}

export default crearCuenta
