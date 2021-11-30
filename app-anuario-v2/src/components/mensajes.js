import React from 'react';
import { useEffect } from 'react';
import '../styles/mensajes.css';

function Mensajes(props) {
    return (
        <div className="Mensajes">
            <div class="row s1">
                <div class="col-9 d-flex justify-content-start align-items-center">
                    <img className="profilePicFeed" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/72/1f/18.jpg" alt=""/>
                    <h2 className="profileNamePost">{props.publication.perfil.nombres + ' ' + props.publication.perfil.apellidos}<br /> <span className="profileNameTwo">{props.publication.perfil.apodo}</span></h2>
                </div>

                <div class="col-3 d-flex justify-content-end align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </div>
            </div>
            <img className="imgFeed" src="https://media.iatiseguros.com/wp-content/uploads/2018/04/04005429/que-hacer-en-hawaii-5.jpg" alt=""/>

            <div className="destino d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#55bbb7" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg>
                <h2 className="profileNamePost ajuste"><span className="profileNameTwo"> Este mensaje esta escrito por </span>{props.publication.autor.apodo}. </h2>

            </div>

            <h3 className="mensaje">{props.publication.comentario.contenido} </h3>

        </div>
    )
}

export default Mensajes;
