// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { routes } from 'routes';

const PrivateRoute = ({ isToken }) => {
  //   const isToken = useSelector(state => state.auth.token);
  return isToken ? <Outlet /> : <Navigate to={routes.login} />;
};

export default PrivateRoute;
