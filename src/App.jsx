import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

import './index.css';
import { routes } from 'routes';
import { AppBar } from 'components/AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { current } from 'redux/auth/authOperations';
import PublicRoute from 'components/Routes/PublicRoute';
import PrivateRoute from 'components/Routes/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isToken = useSelector(state => state.auth.token);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className="app">
      <AppBar />
      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route path={routes.home} exact="true" element={<HomePage />} />

          <Route element={<PublicRoute isToken={isToken} />}>
            <Route path={routes.login} exact="true" element={<LoginPage />} />
          </Route>

          <Route element={<PublicRoute isToken={isToken} />}>
            <Route path={routes.signup} exact="true" element={<SignupPage />} />
          </Route>

          {/* <Route path={routes.login} exact="true" element={<LoginPage />} /> */}
          {/* <Route path={routes.signup} exact="true" element={<SignupPage />} /> */}

          <Route element={<PrivateRoute isToken={isToken} />}>
            <Route
              path={routes.contacts}
              exact="true"
              element={<ContactsPage />}
            />
          </Route>
          {/* <Route
            path={routes.contacts}
            exact="true"
            element={<ContactsPage />}
          /> */}
          <Route path="*" element={<Navigate to={routes.home} replace />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
