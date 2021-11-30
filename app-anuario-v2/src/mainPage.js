import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './mainPage.css';

import Mensajes from './components/mensajes';

function MainPage() {
    //Inicialización (constructor)
    
    const [state,setState] = useState({
        email: "",
        contraseña: "",
        remember_user: ""
    });

    const [errorsState,setErrorState] = useState({
        emailError: "",
        contraseñaError: ""
    });

    //Consumiendo el servicio POST  
    const login = async () =>{
        const respuesta = await fetch('http://18.234.222.26:8080/login',{
           method:'POST',
           headers:{
           'Content-Type':'application/json'
           },
           credentials: 'include',
           body:JSON.stringify({
               ...state
           })
       });
       //Imprimir lo que responde el servidor
     const data = await respuesta.json();
     console.log(data);
     if(data.status===400){
         setErrorState({
           emailError: data.errors.email ? data.errors.email.msg : "",
           contraseñaError: data.errors.contraseña ? data.errors.contraseña.msg : ""
       });
     }else if(data.status === 200){
        delete data.usuario.contraseña; 
        if(state.remember_user){
            document.cookie = `email=${data.usuario.email}; max-age=${60*60*24};`;
            document.cookie = `usuario=${JSON.stringify(data.usuario)}; max-age=${60*60*24};`;
        }
        sessionStorage.setItem('id', data.usuario.id);
        sessionStorage.setItem('nombres', data.usuario.nombres);
        sessionStorage.setItem('apellidos', data.usuario.apellidos);
        sessionStorage.setItem('email', data.usuario.email);
        sessionStorage.setItem('apodo', data.usuario.apodo);
        alert("Inicio de sesion exitoso");
        window.location.href="/AnuarioF";
     }
   };

   if(sessionStorage.email){
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

                </div>

            </div>

        </div>
    )
   }else{
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

                    <form onSubmit={(e)=>e.preventDefault()}>
                        <h2 id="inicio">Iniciar sesión</h2>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <input type="email" className="form-control" onChange={(e)=>setState({...state, email:e.target.value})} id="inputEmail3" placeholder="Correo electrónico" />
                            </div>
                            <div className="errors">
                                <p>{errorsState.emailError}</p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <input type="password" className="form-control" onChange={(e)=>setState({...state, contraseña:e.target.value})} id="inputPassword3" placeholder="Contraseña" />
                            </div>
                            <div className="errors">
                                <p>{errorsState.contraseñaError}</p>
                            </div>
                        </div>
                        <input className="form-check-input" onChange={(e)=>setState({...state, remember_user:e.target.checked})} type="checkbox" id="gridCheck1" />
                        <label className="form-check-label" for="gridCheck1"> Recordar usuario
                        </label>
                        <br />
                        <button type="submit" onClick={login} className="btn btn-primary">Iniciar sesión</button>

                    </form>
                </div>

            </div>

        </div>
    )
   }
    
}

export default MainPage;
