import React from 'react'

const NotFoundPage = () => {
   //ponemos los permisos en false
   localStorage.setItem('permiso', false);
  return (
    <div>
        No se encontro la pagina
    </div>
  )
}

export default NotFoundPage