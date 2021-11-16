import React from 'react'
import '../styles/feed.css'
import Perfiles from './perfiles';
import Menu from './menu';
import Mensajes from './mensajes';


<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

function feed() {
    return (
        <div className="feed">
            <div class="row">
                <div class="col-3 d-flex">
                    <Menu />
                </div>
                <div class="col-9">
                    <Perfiles />

                    <h2 class="Intro">Hola Carlos, <br /> <span class="Introp">bienvenido a tu anuario digital.</span> </h2>

                    <div className="buffer">
                        <Mensajes />
                        <Mensajes />
                        <Mensajes />
                        <Mensajes />
                        <Mensajes />
                        <Mensajes />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default feed;
