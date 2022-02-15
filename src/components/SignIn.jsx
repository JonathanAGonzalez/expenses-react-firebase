import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import useForm from '../hooks/useForm';
import { ReactComponent as SvgLogin } from '../assets/images/login.svg';
import { Header, Title } from '../elements/Header';
import { ContainerButton, Form, Input } from '../elements/ElementsForm';
import Button from '../elements/Button';
import Error from '../elements/WarningForm';
import Alert from '../elements/Alert';

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.24rem;
  margin-bottom: 1.25rem;
`;

const SignIn = () => {
  const { values, errorFirebase, error, handleChange, loginUser } = useForm({
    email: '',
    password: '',
  });

  return (
    <>
      <Helmet>
        <title>Iniciar Sesión</title>
      </Helmet>
      <Header>
        <Title>Iniciar Sesión</Title>
        <div>
          <Button to="/crear-cuenta">Crear Cuenta</Button>
        </div>
      </Header>

      <Form onSubmit={loginUser}>
        {errorFirebase && <Alert type="error" msg={errorFirebase} />}
        <Svg />
        <Input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Correo electrónico"
          input={values.email}
        />
        {error.email && <Error msg={error.email} />}
        <Input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Contraseña"
          input={values.password}
        />
        {error.password && <Error msg={error.password} />}
        <ContainerButton>
          <Button as="button" type="submit" to="/">
            Iniciar sesión
          </Button>
        </ContainerButton>
      </Form>
    </>
  );
};

export default SignIn;
