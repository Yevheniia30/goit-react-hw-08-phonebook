import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state?.auth?.user?.name);
  console.log('userName', userName);

  return (
    <div className={s.usermenu}>
      {/* <img
        src="https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true"
        width={40}
        alt="avatar"
      /> */}
      {userName && (
        <>
          <span className={s.avatar}>
            {userName?.slice(0, 1).toUpperCase()}
          </span>
          <p>Welcome, {userName}!</p>
        </>
      )}

      <button className={s.btn} onClick={() => dispatch(logout())}>
        exit
      </button>
    </div>
  );
};
