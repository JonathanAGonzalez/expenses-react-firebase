import { Helmet } from 'react-helmet-async';
import useForm from '../../hooks/useForm';
import Alert from '../../elements/Alert';
import Error from '../../elements/WarningForm';
import {
  InputForm,
  Form,
  ParagraphForm,
  AnchorForm,
  LeftForm,
  TitleForm,
  ContainerForm,
} from '../../elements/ElementsForm';

const SignUp = () => {
  //obtengo valores del formulario con el custom hook
  const { errorFirebase, values, error, handleSubmit, handleChange } =
    useForm();

  //Destructuro los valores para enviarlos a los inputs
  const { email, password, passwordConfirm } = values;

  return (
    <>
      <Helmet>
        <title>Crear cuenta</title>
      </Helmet>

      <ContainerForm>
        {errorFirebase && <Alert type="error" msg={errorFirebase} />}

        <LeftForm>
          <TitleForm block>Welcome</TitleForm>
          <ParagraphForm fontWhite fontLarge>
            The app is perfect for keeping track of your expenses.
          </ParagraphForm>
        </LeftForm>

        <Form onSubmit={handleSubmit}>
          <TitleForm block>Create Account</TitleForm>
          <ParagraphForm fontLarge>
            Welcome! create account to add your expenses
          </ParagraphForm>

          <InputForm
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            value={email}
          />
          {error.email && <Error msg={error.email} />}
          {errorFirebase && <Alert type="error" msg={errorFirebase} />}

          <InputForm
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            value={password}
          />
          {error.password && <Error msg={error.password} />}

          <InputForm
            type="password"
            name="passwordConfirm"
            placeholder="Repetir Contraseña"
            onChange={handleChange}
            value={passwordConfirm}
          />
          {error.passwordConfirm && <Error msg={error.passwordConfirm} />}

          <InputForm value="Crear cuenta" type="submit" bgBlack fontWhite />

          <ParagraphForm block fontBlack>
            Ya tenés cuenta?,{' '}
            <AnchorForm to="/iniciar-sesion">Inicia sesión</AnchorForm>
          </ParagraphForm>
        </Form>
      </ContainerForm>
    </>
  );
};

export default SignUp;
