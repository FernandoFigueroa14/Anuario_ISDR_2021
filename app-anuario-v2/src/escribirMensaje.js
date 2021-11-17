import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './crearCuenta.css';

function escribirMensaje() {
    return (
        <div className="crearCuenta">

            <div className="row inicioSes ajuste2">



                <form>
                    <h2 id="inicio">Mandar mensaje a un compañero ISDR</h2>



                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <label for="exampleFormControlTextarea1" class="form-label ">De:</label>
                            <input type="text" class="form-control formatoIn" id="nombre" placeholder="AUTOR" disabled />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <label for="exampleFormControlTextarea1" class="form-label ">Para:</label>
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>Escoger a mi compañero</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label ">Mensaje</label>
                        <textarea class="form-control formatoIn" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>


                    <h6>Agrega un recuerdo</h6>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="inputGroupFile01" />
                    </div>


                    <button type="submit" class="btn btn-primary">Mandar mensaje</button>
                </form>

            </div>

        </div>
    )
}

export default escribirMensaje
