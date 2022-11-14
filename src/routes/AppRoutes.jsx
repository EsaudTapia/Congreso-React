import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { permiso, ProtectedRoute } from '../components/ProtectedRoutes'
import ListadoParticipantes from '../pages/ListadoParticipantes'
import ModificarParticipante from '../pages/ModificarParticipante'
import NotFoundPage from '../pages/NotFoundPage'
import PaginaPrincipal from '../pages/PaginaPrincipal'
import RegistrarParticipante from '../pages/RegistrarParticipante'


const AppRoutes = () => {
   //traemos del locastorage el permiso si existe
    const permiso = JSON.parse(localStorage.getItem('permiso'));

  
  return (
    <>
   
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<PaginaPrincipal/>}/>
            <Route path="/inicio" element={<PaginaPrincipal/>}/>
            <Route path="/registrar" element={<RegistrarParticipante/>}/>
            <Route path="/listadoParticipantes" element={<ListadoParticipantes/>}/>

            <Route path="/editarParticipante/:id" element={
            <ProtectedRoute isAllowed={permiso}>
            <ModificarParticipante/>
            </ProtectedRoute>
            }/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>



  


        
       
    </>
  )
}

export default AppRoutes