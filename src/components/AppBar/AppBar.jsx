import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { routes } from 'routes';

export const AppBar = () => {
  // const isLogin = useSelector(state => state.auth.isLoggedIn);
  const isToken = useSelector(state => state.auth.token);

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink
          to={routes.home}
          className={({ isActive }) =>
            isActive ? s.active + ' ' + s.navlink : s.navlink
          }
        >
          home
        </NavLink>
        {isToken && (
          <NavLink
            to={routes.contacts}
            className={({ isActive }) =>
              isActive ? s.active + ' ' + s.navlink : s.navlink
            }
          >
            contacts
          </NavLink>
        )}
      </nav>
      {isToken ? <UserMenu /> : <Navigation />}
    </header>
  );
};
