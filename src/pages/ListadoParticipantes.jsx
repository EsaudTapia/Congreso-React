import React from 'react'
import {BrowserRouter,Route,Routes,Navigate,Link,NavLink} from 'react-router-dom'

const ListadoParticipantes = () => {
    //ponemos los permisos en false
    localStorage.setItem('permiso', false);

    //traemos los datos del local storage
    const participantes = JSON.parse(localStorage.getItem('participantes'));

const autorizar = () => {
 //
 localStorage.setItem('permiso', true);
      console.log(id);

}
    
  return (
    <div>
        <h1 className='text-center'>Listado de Participantes</h1>

        {/* etiqueta a para agregar participante como etiqueta  */}
        <Link to='/registrar' className='btn btn-primary mb-3 ml-3'>Agregar Participante</Link>



       {/* Mostramos todos los registros del localStorage en cards bonitas validando si existen registros */}
         {participantes.length > 0 ? (
          
        <div className="row ">
            {participantes.map((participante) => (
            <div className="col-md-4  text-center" key={participante.id}>
                  <Link to={`/editarParticipante/${participante.id}`} onClick={ autorizar } style={{textDecoration: 'none' , color: 'black' , cursor: 'pointer', margin: '0 auto'}}>
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{participante.nombre} {participante.apellido}</h5>
                    <img src={participante.avatar} alt="Avatar" className="img-fluid rounded-circle border border-primary mb-3" width={100} />
                    <p className="card-text">Correo: {participante.email}</p>        
                    
                    <a href={`https://twitter.com/${participante.usuarioTwitter}`} className="card-link">Tiwtter: @{participante.usuarioTwitter}</a>


                    </div>
                    
                    </div>
                    </Link>
                    </div>
                    
                    ))}
                    </div>
                    
                    ) : (
                    <div className="alert alert-danger" role="alert">
                    No hay participantes registrados
                    </div>
                    )}
                    </div>
                    )
                    }

                    
export default ListadoParticipantes