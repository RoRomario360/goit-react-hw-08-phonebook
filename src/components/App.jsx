import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Home from './Home/Home';
import RegisterForm from 'pages/Register/Register';
import LoginForm from 'pages/Login/Login';
//
import Contacts from 'pages/Contacts/Contacts';
//
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const App = () => {
  // const loader = useSelector(state => state.contacts.loading);
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
      <ToastContainer autoClose={2000} theme="colored" />
    </>
  );
};
