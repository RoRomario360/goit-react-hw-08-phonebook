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

export const App = () => {
  // const loader = useSelector(state => state.contacts.loading);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
      </Routes>
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
