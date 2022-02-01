import { Helmet } from 'react-helmet-async';
import useForm from '../hooks/useForm';
import styled from 'styled-components';
import Button from '../elements/Button';
import Alert from '../elements/Alert';
import Error from '../elements/WarningForm';
import { Header, Title } from '../elements/Header';
import { ContainerButton, Form, Input } from '../elements/ElementsForm';
import { ReactComponent as SvgRegister } from '../assets/images/register.svg';

const Svg = styled(SvgRegister)`
  width: 100%;
  max-height: 6.24rem;
  margin-bottom: 1.25rem;
`;

const SignUp = () => {
  const { errorFirebase, values, error, handleSubmit, handleChange } =
    useForm();
  const { email, password, passwordConfirm } = values;

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
      {errorFirebase && <Alert type="error" msg={errorFirebase} />}
      <Form onSubmit={handleSubmit}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
          value={email}
        />
        {errorFirebase && <Alert type="error" msg={errorFirebase} />}

        {error.email && <Error msg={error.email} />}
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
          value={password}
        />
        {error.password && <Error msg={error.password} />}

        <Input
          type="password"
          name="passwordConfirm"
          placeholder="Repetir Contraseña"
          onChange={handleChange}
          value={passwordConfirm}
        />
        {error.passwordConfirm && <Error msg={error.passwordConfirm} />}

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
