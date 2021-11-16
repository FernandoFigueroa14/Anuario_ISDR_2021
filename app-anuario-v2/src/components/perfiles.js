import React from 'react'
import '../styles/perfiles.css';

function perfiles() {
    return (
        <div className="Perfiles d-flex justify-content-center">
            <div className="Amigo">
                <img className="profilePicHistoria hoverPic" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/72/1f/18.jpg" alt=""/>
                <h2>Tu historia</h2>
            </div>
            <div className="Amigo">
                <img className="profilePicHistoria2 hoverPic" src="https://i.blogs.es/ca3f34/space-perspective_fullaltitude-squashed/450_1000.jpg" alt=""/>
                <h2>Fernando Figue</h2>
            </div>
            <div className="Amigo">
                <img className="profilePicHistoria2 hoverPic" src="https://inmobiliare.com/himalaya/wp-content/uploads/2020/06/Nueva-York_1.jpg" alt=""/>
                <h2>Pie deforme</h2>
            </div>
        </div>
    )
}

export default perfiles
