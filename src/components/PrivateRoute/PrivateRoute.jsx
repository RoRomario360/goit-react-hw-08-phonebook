import { useSelector } from 'react-redux';
import { getIsLogged } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const isLogin = useSelector(getIsLogged);
  return isLogin ? children : <Navigate to="/login" />;
}
