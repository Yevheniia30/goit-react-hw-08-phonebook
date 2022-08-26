import { Navigate, Outlet } from 'react-router-dom';
import { routes } from 'routes';

const PublicRoute = ({ isToken }) => {
  return isToken ? <Navigate to={routes.contacts} /> : <Outlet />;
};

export default PublicRoute;
