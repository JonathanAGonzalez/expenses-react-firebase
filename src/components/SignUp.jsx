import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { Header, Title } from '../elements/Header';
import { ContainerButton, Form, Input } from '../elements/ElementsForm';
import { ReactComponent as SvgRegister } from '../assets/images/register.svg';
import Button from '../elements/Button';

const Svg = styled(SvgRegister)`
  width: 100%;
  max-height: 6.24rem;
  margin-bottom: 1.25rem;
`;

const SignUp = () => {
  const initialState = {
    email: '',
    password: '',
    passwordConfirm: '',
  };

  const [values, setValues] = useState(initialState);
  const { email, password, passwordConfirm } = values;
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const target = e.target;
    setValues({ ...values, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = {};
    setError({});
    const ex = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    const emailIsValid = ex.test(email);
    if (!emailIsValid) {
      err.email = 'Email is not valid';
      setError(err);
    }
    if (password.length < 6 || password === '') {
      err.password = 'Password must be at least 6 characters';
      setError(err);
    }
    if (password !== passwordConfirm) {
      err.passwordConfirm = 'Passwords do not match';
      setError(err);
    }

    console.log('registrado');
  };

  return (
    <>
      <Helmet>
        <title>Crear cuenta personal</title>
      </Helmet>
      <Header>
        <Title>Crear cuenta</Title>
        <div>
          <Button to="/iniciar-sesion">Iniciar sesión</Button>
        </div>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
          value={email}
        />
        <p>{error.email}</p>
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
          value={password}
        />
        <p>{error.password}</p>
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="Repetir Contraseña"
          onChange={handleChange}
          value={passwordConfirm}
        />
        <p>{error.passwordConfirm}</p>

        <ContainerButton>
          <Button as="button" type="submit" to="/">
            Crear cuenta
          </Button>
        </ContainerButton>
      </Form>
    </>
  );
};

export default SignUp;
