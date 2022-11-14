import { Navigate, Outlet } from "react-router-dom";

export let permiso=false;

export const ProtectedRoute = ({
  isAllowed,
  redirectTo = "/listadoParticipantes",
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};