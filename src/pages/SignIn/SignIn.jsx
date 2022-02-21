import { Helmet } from 'react-helmet-async';
import useForm from '../../hooks/useForm';
import {
  Form,
  InputForm,
  LeftForm,
  ContainerForm,
  TitleForm,
  ParagraphForm,
  AnchorForm,
} from '../../elements/ElementsForm';
import Error from '../../elements/WarningForm';
import Alert from '../../elements/Alert';

const SignIn = () => {
  const { values, errorFirebase, error, handleChange, loginUser } = useForm({
    email: '',
    password: '',
  });

  return (
    <>
      <Helmet>
        <title>Expenses - Iniciar Sesión</title>
      </Helmet>
      <ContainerForm>
        {errorFirebase && <Alert type="error" msg={errorFirebase} />}

        <LeftForm>
          <TitleForm block>Welcome</TitleForm>
          <ParagraphForm fontWhite fontLarge>
            The app is perfect for keeping track of your expenses.
          </ParagraphForm>
        </LeftForm>

        <Form onSubmit={loginUser}>
          <TitleForm block>LOGIN</TitleForm>
          <ParagraphForm fontLarge>
            Welcome! Sign in to add your expenses
          </ParagraphForm>

          {error.email && <Error msg={error.email} mobile />}
          <InputForm
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Correo electrónico"
            input={values.email}
          />

          {error.password && <Error msg={error.password} mobile />}
          <InputForm
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Contraseña"
            input={values.password}
          />

          <InputForm value="Iniciar Sesión" type="submit" bgBlack fontWhite />

          <ParagraphForm block fontBlack>
            No tenés cuenta?,{' '}
            <AnchorForm to="/crear-cuenta">registrate</AnchorForm>
          </ParagraphForm>
        </Form>
      </ContainerForm>
    </>
  );
};

export default SignIn;
