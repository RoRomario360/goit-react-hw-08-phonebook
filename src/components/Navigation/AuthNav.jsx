import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Sign in</Link>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default AuthNav;
