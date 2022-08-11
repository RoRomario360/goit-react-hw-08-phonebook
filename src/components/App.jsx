// import { Form } from './ContactForm/ContactForm';
// import Container from './Container/Container';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { useSelector } from 'react-redux';
// import PacmanLoader from 'react-spinners/PacmanLoader';
// import s from './ContactList/ContactList.module.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
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
      <Navigation />
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

////

//  <div>
//    <Container title="Phone book">
//      <Form />
//    </Container>
//    <Container title="Contacts">
//      <Filter />
//      <ContactList />
//      {
//        <div className={s.loader}>
//          <PacmanLoader color={'gray'} loading={loader} size={10} />
//        </div>
//      }
//    </Container>
//  </div>;
