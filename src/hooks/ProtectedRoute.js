import { Navigate } from 'react-router-dom';
import useUserContext from './useUserContext';

const ProtectedRoute = ({ children }) => {
  const userContext = useUserContext();

  return userContext.stateUserContext ? (
    children
  ) : (
    <Navigate replace to="/iniciar-sesion" />
  );
};

export default ProtectedRoute;
