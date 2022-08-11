import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Sign in</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
