import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './crearCuenta.css';

function escribirMensaje() {
    return (
        <div className="crearCuenta">

            <div className="row inicioSes ajuste2">



                <form>
                    <h2 id="inicio">Mandar mensaje a un compañero ISDR</h2>



                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <label for="exampleFormControlTextarea1" className="form-label ">De:</label>
                            <input type="text" className="form-control formatoIn" id="nombre" placeholder="AUTOR" disabled />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <label for="exampleFormControlTextarea1" className="form-label ">Para:</label>
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>Escoger a mi compañero</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label ">Mensaje</label>
                        <textarea className="form-control formatoIn" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>


                    <h6>Agrega un recuerdo</h6>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="inputGroupFile01" />
                    </div>


                    <button type="submit" className="btn btn-primary">Mandar mensaje</button>
                </form>

            </div>

        </div>
    )
}

export default escribirMensaje
