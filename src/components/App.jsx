import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Home from './Home/Home';
import RegisterForm from 'pages/Register/Register';
import LoginForm from 'pages/Login/Login';
import { useEffect } from 'react';
import Contacts from 'pages/Contacts/Contacts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selectors';
import { getCurrentUser } from 'redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, token]);

  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterForm />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginForm />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer autoClose={1000} theme="colored" />
    </>
  );
};
