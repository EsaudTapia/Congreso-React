import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

 const PaginaPrincipal = () => {
     //ponemos los permisos en false
     localStorage.setItem('permiso', false);
    //creamos el hook useNavigate para redireccionar a una ruta especifica
const navigate = useNavigate();
//si no existe el localstorage lo creamos 
if(!localStorage.getItem('participantes')){
    localStorage.setItem('participantes',JSON.stringify([]));
}

const handleRegistro = () => {
//redireccionamos a la ruta login
navigate('/registrar');
}

  return (
    <div className="container-fluid">

    {/* pagina principal divida en dos imagenes */}
    
	<div className="row">
		<div className="col-md-12">
			<div className="row">
				<div className="col-md-12 ">
                <div className="jumbotron text-center ">
						<h2>
						Congreso nacional de tecnologias de la informacion y comunicacion
						</h2>
						<p>
							registre sus datos para poder participar en el congreso nacional de tecnologias de la informacion y comunicacion
						</p>
						<p>
							{/* boton para ir a la pagina de registro con etiqueta a */}
                            <a href='/registrar' className="btn btn-primary  btn-block  col-md-4" style={{margin: '0 auto'}} onClick={handleRegistro}>Registrarse</a>
                           
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6 text-center">
                    <img alt="Tics" src="src/assets/utl.png"  className="img-fluid"/>
				</div>
				<div className="col-md-6 text-center">
					<img alt="Tics" src="src/assets/Tics.png" className="img-fluid" />
				</div>
			</div>
			
			<div className="row mt-1 mb-2">
				<div className="col-md-4">
				</div>
				<div className="col-md-4">
					 
					{/* boton para ir a la pagina de listado */}
                    <a href='/listadoParticipantes' className="btn btn-success  btn-block  col-md-6" style={{margin: '0 auto'}} >Ver participantes</a>
                    


				</div>
				<div className="col-md-4">
				</div>
			</div>
		</div>
	</div>
    
</div>


  )
}

export default PaginaPrincipal