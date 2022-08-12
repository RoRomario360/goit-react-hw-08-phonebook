import Avatar from 'react-avatar';

import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLogged, getUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import s from './AppBar.module.css';

const AppBar = () => {
  const isLogin = useSelector(getIsLogged);
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const handlerLogout = () => {
    dispatch(logOut());
  };

  return (
    <header className={s.header}>
      <div>
        <Link className={s.link_nav} to="/">
          Home
        </Link>
        <Link className={s.link_nav} to="/contacts">
          Contacts
        </Link>
      </div>
      {isLogin && (
        <div className={s.logged_box}>
          <div className={s.user_box}>
            <h3 className={s.logged_text}>Welcome: {name}</h3>
            <Avatar
              className={s.user_img}
              githubHandle="sitebase"
              size={30}
              round="20px"
            />
          </div>
          <Button
            sx={{ height: '30px' }}
            onClick={handlerLogout}
            variant="contained"
            endIcon={<LogoutIcon />}
          >
            Log Out
          </Button>
        </div>
      )}
      {!isLogin && (
        <div className={s.register_box}>
          <Link className={s.link_nav} to="/register">
            Sign in
          </Link>
          <Link className={s.link_nav} to="/login">
            Log in
          </Link>
        </div>
      )}
    </header>
  );
};

export default AppBar;
