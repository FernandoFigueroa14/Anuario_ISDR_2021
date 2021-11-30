import React from 'react'
import { useEffect, useState } from 'react';
import '../styles/perfiles.css';

function Perfiles() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('http://18.234.222.26:8080/usuarios')
        .then(res=>res.json())
          .then(datos=>{
            setUsuarios(datos);
          })
          .catch(err=>{
            console.log("Servidor desconectado")
            console.log(err)
          }) 
    },[]);

    return (
        <div>
            <div>
                <h6>Filtrar publicaciones de:</h6>
            </div>
            <div className="Perfiles d-flex justify-content-center">
                <div className="Amigo">
                    <img className="profilePicHistoria hoverPic" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/72/1f/18.jpg" alt="" />
                    <h2>Tu historia</h2>
                </div>
                {usuarios.map(usuario => {
                    if(usuario.id !== parseInt(sessionStorage.id)){
                        return <div className="Amigo">
                            <img className="profilePicHistoria2 hoverPic" src="https://i.blogs.es/ca3f34/space-perspective_fullaltitude-squashed/450_1000.jpg" alt="" />
                            <h2>{usuario.apodo}</h2>
                        </div>
                    }
                    
                })}
                
            </div>
        </div>
    )
}

export default Perfiles;
