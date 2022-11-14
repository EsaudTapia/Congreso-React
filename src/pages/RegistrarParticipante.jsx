import React from "react";
import { v4 as uuid } from "uuid";
import { useState ,useReducer, useEffect} from "react";
import { ParticipantesReducer } from "../reducer/ParticipantesReducer";

const RegistrarParticipante = () => {
     //ponemos los permisos en false
     localStorage.setItem('permiso', false);
    //defiimos el local storage
const init = () => {
    //definimos el local storage
    const participantes = localStorage.getItem('participantes');
    //si existe el local storage lo retornamos
    return participantes ? JSON.parse(participantes) : [];
}

  const [state, dispatch] = useReducer(ParticipantesReducer, [],init);//inicializador es una funcion que se encarga de calcular el valor inicial del estado
  useEffect(() => {
    //Creamos un local storage
    localStorage.setItem("participantes", JSON.stringify(state));
  }, [state]);

  //agregamos un usestate
  const [data, setdata] = useState({
    nombre: "",
    apellido: "",
    email: "",
    usuarioTwitter: "",
    avatar: "",
    aceptTerms: false,
  });

  const { nombre, apellido, email, usuarioTwitter, avatar, aceptTerms } = data;

  //Agregamos el evento handlechange para los campos del formulario
  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  //definimos el actionAdd paraa el dispatch el cual necesita
  //un type y un payload
  const actionAdd = {
    type: "add",
    payload: {
      id: "" + uuid(),
      nombre: nombre,
      apellido: apellido,
      email: email,
      usuarioTwitter: usuarioTwitter,
      avatar: avatar,
      aceptTerms: aceptTerms,
    },
  };

  //agregamos el evento handleSubmit para el boton del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    //validamos que los campos no esten vacios
    if (
      nombre.trim().length === 0 ||
      apellido.trim().length === 0 ||
      email.trim().length === 0 ||
      usuarioTwitter.trim().length === 0 ||
      avatar.trim().length === 0
    
    ) {
      return alert("Todos los campos son obligatorios");
    }

    //validamos que el checkbox este seleccionado
    if (!aceptTerms) {
        return alert("Debe aceptar los terminos y condiciones");
    }


    dispatch(actionAdd);
    setdata({
      nombre: "",
      apellido: "",
      email: "",
      usuarioTwitter: "",
      avatar: "",
      aceptTerms: false,
    });

    //navegamos a la pagina de lista
    window.location.href = "/listadoParticipantes";


  };

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
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Nombre"
                  name="nombre"
                  required="required"
                  onChange={handlechange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input
                  type="text"
                  className="form-control"
                  id="apellidos"
                  placeholder="Apellidos"
                  name="apellido"
                  
                  onChange={handlechange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  name="email"
                  
                  onChange={handlechange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="usuarioTwitter">Usuario en Twitter</label>
                <input
                  type="text"
                  className="form-control"
                  id="usuarioTwitter"
                  placeholder="Usuario en Twitter"
                  name="usuarioTwitter"


                  onChange={handlechange}
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
                          src="src/assets/Avatar1.jpg"
                          width={100}
                          className="img-fluid rounded-circle border border-primary"
                        />
                      </label>
                      <input
                        className="form-check-input ml-2"
                        type="radio"
                        name="avatar"
                        id="avatar1"
                        value="./src/assets/Avatar1.jpg"
                        onChange={handlechange}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-check-label" htmlFor="avatar2">
                        <img
                          alt="Avatar2"
                          src="./src/assets/Avatar2.jpg"
                          width={100}
                          className="img-fluid rounded-circle border border-primary"
                        />
                      </label>
                      <input
                        className="form-check-input ml-2"
                        type="radio"
                        name="avatar"
                        id="avatar2"
                        value="./src/assets/Avatar2.jpg"
                        onChange={handlechange}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-check-label" htmlFor="avatar3">
                        <img
                          alt="Avatar3"
                          src="src/assets/Avatar3.jpg"
                          width={100}
                          className="img-fluid rounded-circle border border-primary"
                        />
                      </label>
                      <input
                        className="form-check-input ml-2"
                        type="radio"
                        name="avatar"
                        id="avatar3"
                        value="./src/assets/Avatar3.jpg"
                        onChange={handlechange}
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
                  value={aceptTerms ? true : false}
                    onChange={handlechange}
                    name="aceptTerms"
                />
                <label
                  className="form-check-label"
                  htmlFor="terminosCondiciones"
                >
                  Acepto los términos y condiciones
                </label>
              </div>

              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary btn-md  btn-block col-md-4 "
                style={{ margin: "0 auto" }}
              >
                Participar
              </button>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrarParticipante;
