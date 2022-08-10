import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import { ContactForm } from './components/ContactForm';
// import { ContactList } from './components/ContactList';
// import { Filter } from './components/Filter';
import './index.css';
import { routes } from 'routes';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

const App = () => {
  return (
    <div className="app">
      <Suspense>
        <Routes>
          <Route path={routes.home} exact="true" element={<HomePage />} />
          <Route path={routes.login} exact="true" element={<LoginPage />} />
          <Route path={routes.signup} exact="true" element={<SignupPage />} />
          <Route
            path={routes.contacts}
            exact="true"
            element={<ContactsPage />}
          />
        </Routes>
      </Suspense>

      {/* <ContactForm />
      <Filter />
      <ContactList /> */}
    </div>
  );
};

export default App;
