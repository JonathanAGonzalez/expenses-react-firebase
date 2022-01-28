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

  const handleChange = (e) => {
    const target = e.target;
    setValues({ ...values, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
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
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
          value={password}
        />
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="Repetir Contraseña"
          onChange={handleChange}
          value={passwordConfirm}
        />
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
