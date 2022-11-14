import React from 'react'

const NavBar = () => {
    //validamos la pagina en la que nos encontramos
    const paginaActual = window.location.pathname;
    //si estamos en la PaginaPrincipal no mostramos el menu y si estamos en otra pagina si
    if(paginaActual != "/"  && paginaActual != "/inicio"){
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#"><img alt="Tics" src="../src/assets/Tics.png" width="50" height="50" className="d-inline-block align-text-top"/> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>

        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/registrar">Registrar</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/listadoParticipantes">Listado</a>
                </li>
              
            </ul>
        </div>
    </div>
</nav>


    </>
  )
}else{
    return (
        <>
        </>
    )
}
}
export default NavBar