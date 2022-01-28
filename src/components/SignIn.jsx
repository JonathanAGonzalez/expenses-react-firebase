import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Header, Title } from '../elements/Header';
import { ContainerButton, Form, Input } from '../elements/ElementsForm';
import { ReactComponent as SvgLogin } from '../assets/images/login.svg';
import Button from '../elements/Button';

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.24rem;
  margin-bottom: 1.25rem;
`;
const SignIn = () => {
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
      <Form>
        <Svg />
        <Input type="email" name="email" placeholder="Correo electrónico" />
        <Input type="password" name="password" placeholder="Contraseña" />
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
