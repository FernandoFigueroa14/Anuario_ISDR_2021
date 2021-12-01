import './App.css';
import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";

import Header from './components/header';
import Feed from './components/feed';

import MainPage from './mainPage';
import CrearCuenta from './crearCuenta';
import Anuario from './AnuarioISDR';
import Mensaje from './escribirMensaje';



export default function App() {
  const cookieEmail = document.cookie === '' ? '' : document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const cookieUsuario = document.cookie === '' ? '' : JSON.parse(document.cookie.replace(/(?:(?:^|.*;\s*)usuario\s*\=\s*([^;]*).*$)|^.*$/, "$1"));

    if(document.cookie !== ''){
        sessionStorage.setItem('id', cookieUsuario.id);
        sessionStorage.setItem('nombres', cookieUsuario.nombres);
        sessionStorage.setItem('apellidos', cookieUsuario.apellidos);
        sessionStorage.setItem('email', cookieUsuario.email);
        sessionStorage.setItem('apodo', cookieUsuario.apodo);
    }
    if(sessionStorage.email){
      return (
        <div className="App">
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="FeedInicio" element={<FeedInicio />} />
            <Route path="AnuarioF" element={<AnuarioF />} />
            <Route path="crearCuenta" element={<CrearCuentaF />} />
            <Route path="MensajeF" element={<MensajeF />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
    
          <nav>
            <ul>
              <li>
                <Link style={linkStyle} to="/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                </svg><br />Inicio
                </Link>
              </li>
    
              <li>
                <Link style={linkStyle} to="/AnuarioF"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bookmarks-fill" viewBox="0 0 16 16">
                  <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z" />
                  <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z" />
                </svg><br />Anuario ISDR 2021
                </Link>
              </li>
    
              <li>
                <Link style={linkStyle} to="/FeedInicio"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-book-fill" viewBox="0 0 16 16">
                  <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                </svg><br />Mi Feed
                </Link>
              </li>
    
              <li>
                <Link style={linkStyle} to="/MensajeF"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg><br />Escribir mensaje
                </Link>
              </li>
            
            </ul>
          </nav>
    
        </div>
      );
    }else{
      return (
        <div className="App">
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="FeedInicio" element={<FeedInicio />} />
            <Route path="AnuarioF" element={<AnuarioF />} />
            <Route path="crearCuenta" element={<CrearCuentaF />} />
            <Route path="MensajeF" element={<MensajeF />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
    
          <nav>
            <ul>
              <li>
                <Link style={linkStyle} to="/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                </svg><br />Inicio
                </Link>
              </li>
    
              <li>
                <Link style={linkStyle} to="/AnuarioF"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bookmarks-fill" viewBox="0 0 16 16">
                  <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z" />
                  <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z" />
                </svg><br />Anuario ISDR 2021
                </Link>
              </li>
    
             
    
              <li>
                <Link style={linkStyle} to="/MensajeF"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg><br />Escribir mensaje
                </Link>
              </li>
            
              <li>
              
                <Link style={linkStyle} to="/crearCuenta"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                </svg><br />Crear cuenta
                </Link>
              </li>
            </ul>
          </nav>
    
        </div>
      );
    }
}

const linkStyle = {
  textDecoration: "none",
  color: 'black'
};

function Home() {
  return (
    <MainPage />
  );
}

function FeedInicio() {
  return (
    <Feed />
  );
}

function CrearCuentaF() {
  return (
    <CrearCuenta />
  );
}

function AnuarioF() {
  return (
    <Anuario />
  );
}

function MensajeF() {
  return (
    <Mensaje />
  );
}



function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
