import React from 'react';
import { useEffect, useState } from 'react';
import { axios } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './crearCuenta.css';

function EscribirMensaje() {
    //Inicialización (constructor)
    const [state,setState] = useState({
        contenido: "",
        path_foto: "",
        id_perfil: ""
    });

    const [errorsState,setErrorState] = useState({
        contenidoError: "",
        path_fotoError: "",
        id_perfilError: ""
    });

    const [pathImage, setPathImage] = useState("");
    const [file, setFile] = useState();
    const [name, setName] = useState("");

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

    const onFileChange = (e) => {
        if(e.target.files && e.target.files.length > 0){
            const file = e.target.files[0];
            if(file.type.includes("image")){
                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = function load(){
                    setPathImage(reader.result);
                }
                setFile(file);

                const nombre = Date.now() + '-' + file.name;

                setName(nombre);
                setState({...state, path_foto: nombre})
            }else{
                alert("Hubo un error al cargar la imagen")
            }
        }
    }

    //Consumiendo el servicio POST  
    const comentarioNuevo = async () =>{
        const respuesta = await fetch('http://18.234.222.26:8080/comentario/agregar',{
           method:'POST',
           headers:{
           'Content-Type':'application/json'
           },
           body:JSON.stringify({
               ...state
           })
       });
       //Imprimir lo que responde el servidor
     const data = await respuesta.json();
     console.log(data);
     if(data.status===400){
         setErrorState({
           contenidoError: data.errors.contenido ? data.errors.contenido.msg : "",
           path_fotoError: data.errors.path_foto ? data.errors.path_foto.msg : "",
           id_perfilError: data.errors.id_perfil ? data.errors.id_perfil.msg : ""
       });
     }else if(data.status === 201){
       const form = new FormData();
       form.append('name', name);
       form.append('file', file, name);

       await axios.post('http://18.234.222.26:8080/comentario/agregar/imagen', form).then(resultado => console.log(resultado))
       .catch(error => console.log(error));

       alert("Comentario creado con éxito");
       window.location.href="/";
     }
   };

    return (
        <div className="crearCuenta">

            <div className="row inicioSes ajuste2">



                <form onSubmit={(e)=>e.preventDefault()}>
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
                            <select className="form-select form-select-lg mb-3" onChange={(e) => setState({...state, id_perfil:e.target.value})} aria-label=".form-select-lg example">
                                <option disabled selected>Escoger a mi compañero</option>
                                {usuarios.map((usuario) => { return <option value={usuario.id} key={usuario.id}>{usuario.apodo}</option> })}
                            </select>
                        </div>
                        <div className="errors">
                            <p>{errorsState.id_perfilError}</p>
                    </div>
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label ">Mensaje</label>
                        <textarea className="form-control formatoIn" onChange={(e)=>setState({...state, contenido:e.target.value})} id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="errors">
                            <p>{errorsState.contenidoError}</p>
                    </div>


                    <h6>Agrega un recuerdo</h6>
                    <div className="input-group mb-3">
                        <input type="file" onChange={onFileChange} className="form-control" id="inputGroupFile01" />
                    </div>
                    <div className="errors">
                            <p>{errorsState.path_fotoError}</p>
                    </div>


                    <button type="submit" onClick={comentarioNuevo} className="btn btn-primary">Mandar mensaje</button>
                </form>

            </div>

        </div>
    )
}

export default EscribirMensaje;
