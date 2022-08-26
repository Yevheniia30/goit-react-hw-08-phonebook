import { Navigate, Outlet } from 'react-router-dom';
import { routes } from 'routes';

const PrivateRoute = ({ isToken }) => {
  return isToken ? <Outlet /> : <Navigate to={routes.login} />;
};

export default PrivateRoute;
