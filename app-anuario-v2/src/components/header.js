import React from 'react'
import '../styles/header.css'

<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

function header() {
    return (
        <div className="container-fluid header">
            <div class="row">
                <div class="col-3">
                    <p className="logo"><span className="LogoOne">Tec</span>ircle</p>
                </div>
                <div class="col-5 d-flex align-items-center search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#757575" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <input className="entrada" type="text" placeholder="Encuentra a tus personas favoritas y escríbeles un mensaje" />
                </div>
                <div class="col-4 d-flex justify-content-end align-items-center">
                    <img className="profilePic" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/72/1f/18.jpg" alt=""/>
                    <h2 className="profileName">Carlos Pano Hernández<br /> <span className="profileNameTwo">Front-end developer</span></h2>
                </div>
            </div>
        </div>
    )
}
export default header;

