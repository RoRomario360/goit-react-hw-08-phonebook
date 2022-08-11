import { useState } from 'react';
import { Box, Button } from '@mui/material';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import TextField from '@mui/material/TextField';

const LoginForm = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
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
      onChange={handleSubmit}
    >
      <TextField
        id="email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        label="Email"
        variant="outlined"
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
      <Button variant="contained" endIcon={<AccountBoxOutlinedIcon />}>
        Log in
      </Button>
    </Box>
  );
};
export default LoginForm;
