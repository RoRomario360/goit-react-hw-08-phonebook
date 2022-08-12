import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>

        <Link to="/contacts">Contacts</Link>
      </div>
    </div>
  );
};

export default Navigation;
