

const RegisterForm = () => {
 const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handlerSubmbit = evt => {
    evt.preventDefault();
    const credentials = {
      name,
      email,
      password,
    };
    console.log(credentials);
    dispatch(signIn(credentials));
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'password':
        setPassword(value);
        break;

      case 'email':
        setEmail(value);
        break;

      default:
        break;
    }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', display: 'flex' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handlerSubmbit}
    >
      <TextField
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={handleChange}
        label="Name"
        variant="outlined"
        autoComplete="name"
      />
      <TextField
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={handleChange}
        label="Email"
        variant="outlined"
        autoComplete="email"
      />
      <TextField
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
        label="Password"
        variant="filled"
      />
      <Button
        type="submit"
        variant="contained"
        endIcon={<AddReactionOutlinedIcon />}
      >
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;
