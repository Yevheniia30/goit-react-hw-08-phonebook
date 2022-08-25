import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import s from './AppBar.module.css';

export const Navigation = () => {
  return (
    <div className={s.nav}>
      <NavLink
        to={routes.login}
        className={({ isActive }) =>
          isActive ? s.active + ' ' + s.navlink : s.navlink
        }
      >
        login
      </NavLink>
      <NavLink
        to={routes.signup}
        className={({ isActive }) =>
          isActive ? s.active + ' ' + s.navlink : s.navlink
        }
      >
        signup
      </NavLink>
    </div>
  );
};
