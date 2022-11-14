import React, { useEffect, useState } from 'react'
import { Link, Navigate,  useParams} from 'react-router-dom'

const ModificarParticipante = () => {

    //validar si da hacia atras en el navegadoe y borrar el permiso
    useEffect(() => {
        window.onpopstate = function(event) {
            localStorage.setItem('permiso', false);
        };
    }, []);

    //traemos el id del participante    
    const { id } = useParams();
   
var local =[];

local = JSON.parse(localStorage.getItem('participantes'));
// var p;
const participante = local.filter(el => el != null)
const p = participante.find((p) => p.id === id)
// console.log(p);

const [data, setData] = useState({ nombre: p.nombre, apellido: p.apellido, email: p.email, avatar: p.avatar, aceptTerms: p.aceptTerms , twitter: p.usuarioTwitter});
  
    const { nombre, apellido,  email, twitter,aceptTerms,avatar } = data;
    console.log(data);

   //Definimos la funcion handleChange //uso el metodo de abajao para agregar los valores
   const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleClick = () => {
   //validamos que los campos no esten vacios
    if (
        nombre.trim().length === 0 ||
        apellido.trim().length === 0 ||
        email.trim().length === 0 ||
        twitter.trim().length === 0 ||
        avatar.trim().length === 0
        ) {
        alert("Todos los campos son obligatorios");
        return;
        }


        //insertamos los nuevos valores en el localstorage
        const participantes = JSON.parse(localStorage.getItem('participantes'));
        const participante = participantes.find((p) => p.id === id)
        participante.nombre = nombre;
        participante.apellido = apellido;
        participante.email = email;
        participante.usuarioTwitter = twitter;
        participante.avatar = avatar;
        participante.aceptTerms = aceptTerms;
        localStorage.setItem('participantes', JSON.stringify(participantes));
         
        //quitamos los permisos para modificar
        localStorage.setItem('permiso', false);
       handleLista();






  };


 const handleLista = () => {
       //redireccionamos a la pagina de participantes
       window.location.href = "/listadoParticipantes";
    }

  
    return (
        <div>
          {/* Formulario con  donde puedas registrar a un participante por Nombre, Apellidos, Email, Usuario en 
        Twitter, escoger de entre 3 opciones en de avaratares con radioButtons mostradas por una imagen y una casilla para aceptar términos y condiciones */}
    
          <div className="col-md-12 mt-3">
            <div className="card">
              <h5 className="card-header">Participante</h5>
              <div className="card-body">
                
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                    onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="nombre"
                      placeholder="Nombre"
                      name="nombre"
                      required="required"
                      value={nombre}
                      
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="apellidos">Apellidos</label>
                    <input
                     onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="apellidos"
                      placeholder="Apellidos"
                      name="apellido"
                      value={apellido}
                      
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    onChange={handleChange}
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      name="email"
                        value={email}
                      
                      
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="usuarioTwitter">Usuario en Twitter</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="usuarioTwitter"
                      placeholder="Usuario en Twitter"
                      name="twitter"
                      value={twitter}
    
                      
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="avatar">Avatar</label>
    
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-4">
                          <label className="form-check-label" htmlFor="avatar1">
                            <img
                              alt="Avatar1"
                              src="../src/assets/Avatar1.jpg"
                              width={100}
                              className="img-fluid rounded-circle border border-primary"
                            />
                          </label>
                          <input
                            onChange={handleChange}
                            className="form-check-input ml-2"
                            type="radio"
                            name="avatar"
                            id="avatar1"
                            value="./src/assets/Avatar1.jpg"
                            checked={avatar ? avatar === './src/assets/Avatar1.jpg' : false}
                            
                          />
                        </div>
                        <div className="col-md-4">
                          <label className="form-check-label" htmlFor="avatar2">
                            <img
                              alt="Avatar2"
                              src="../src/assets/Avatar2.jpg"
                              width={100}
                              className="img-fluid rounded-circle border border-primary"
                            />
                          </label>
                          <input
                            onChange={handleChange}
                            className="form-check-input ml-2"
                            type="radio"
                            name="avatar"
                            id="avatar2"
                            value="./src/assets/Avatar2.jpg"
                            checked={avatar ? avatar === './src/assets/Avatar2.jpg' : false}
                          />
                        </div>
                        <div className="col-md-4">
                          <label className="form-check-label" htmlFor="avatar3">
                            <img
                              alt="Avatar3"
                              src="../src/assets/Avatar3.jpg"
                              width={100}
                              className="img-fluid rounded-circle border border-primary"
                            />
                          </label>
                          <input
                            onChange={handleChange} 
                            className="form-check-input ml-2"
                            type="radio"
                            name="avatar"
                            id="avatar3"
                            value="./src/assets/Avatar3.jpg"
                            checked={avatar ? avatar === './src/assets/Avatar3.jpg' : false}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="terminosCondiciones"                      
                      checked={aceptTerms ? true : false}
                      onChange={handleChange}
                      name="aceptTerms"
                      disabled
                    />
                    <label
                      className="form-check-label"
                      htmlFor="terminosCondiciones"
                    >
                      Acepto los términos y condiciones
                    </label>
                  </div>
    
                  <button
                    
                    type="submit"
                    className="btn btn-primary btn-md  btn-block col-md-4 "
                    style={{ margin: "0 auto" }}
                    onClick={handleClick}
                  >
                    Participar
                  </button>
          
              </div>
            </div>
          </div>
        </div>
      );
}

export default ModificarParticipante