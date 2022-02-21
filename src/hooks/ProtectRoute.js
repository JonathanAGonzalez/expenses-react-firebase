import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useUserContext from './useUserContext';

const ProtectRoute = () => {
  const user = useUserContext();

  return user.stateUserContext ? <Outlet /> : <Navigate to="/iniciar-sesion" />;
};

export default ProtectRoute;
