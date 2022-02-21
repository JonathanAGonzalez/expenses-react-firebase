import { Helmet } from 'react-helmet-async';
import useForm from '../../hooks/useForm';
import Alert from '../../components/Alert';
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
          <TitleForm block>Te damos la bienvenida!</TitleForm>
          <ParagraphForm fontWhite fontLarge>
            La aplicación es muy buena para realizar un seguimiento de tus
            gastos.
          </ParagraphForm>
        </LeftForm>

        <Form onSubmit={handleSubmit}>
          <TitleForm block>Crear cuenta</TitleForm>
          <ParagraphForm fontLarge>
            Crea tu cuenta con solo unos pocos datos
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
