// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { routes } from 'routes';

const PublicRoute = ({ isToken }) => {
  //   const isToken = useSelector(state => state.auth.token);
  return isToken ? <Navigate to={routes.contacts} /> : <Outlet />;
};

export default PublicRoute;
