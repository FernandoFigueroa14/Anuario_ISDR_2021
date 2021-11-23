import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './crearCuenta.css';

function crearCuenta() {
    //Consumiendo el servicio POST  
    const usuarioNuevo = 
         fetch('http://18.234.222.26:8080/usuario/agregar',{
            method:'POST',
            headers:{
            'Content-Type':'application/json'
            },
            body:JSON.stringify({
            mensaje:"Enviando JSON"
            })
        })
    

    return (
        <div className="crearCuenta">

            <div className="row inicioSes ajuste2">

                <form>
                    <h2 id="inicio">Crear mi cuenta</h2>
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <input type="text" className="form-control formatoIn" id="nombres" name="nombres" placeholder="Tu nombre" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <input type="text" className="form-control formatoIn" id="apellidos" name="apellidos" placeholder="Tus apellidos" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <input type="email" className="form-control formatoIn" id="email" name="email" placeholder="Correo electrónico" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <input type="password" className="form-control formatoIn" id="contraseña" name="contraseña" placeholder="Contraseña" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <input type="password" className="form-control formatoIn" id="contraseñaConfirm" name="contraseñaConfirm" placeholder="Confirma tu contraseña" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <input type="text" className="form-control formatoIn" id="apodo" name="apodo" placeholder="Username" />
                        </div>
                    </div>
                    <h6>Sube tu foto de perfil</h6>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="path_foto" name="path_foto" />
                    </div>


                    <button type="submit" className="btn btn-primary" onClick={usuarioNuevo}>Registrarme</button>
                </form>

            </div>

        </div>
    )
}

export default crearCuenta;
