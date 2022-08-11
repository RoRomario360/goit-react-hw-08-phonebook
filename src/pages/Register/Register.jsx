import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import { signIn } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    // setIsLoading(true);
    dispatch(signIn(values));
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', display: 'flex' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="name"
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
        label="Name"
        variant="outlined"
        autoComplete="name"
      />
      <TextField
        id="email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        label="Email"
        variant="outlined"
        autoComplete="email"
      />
      <TextField
        id="password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        label="Password"
        variant="filled"
      />
      <Button variant="contained" endIcon={<AddReactionOutlinedIcon />}>
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;
