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
import Alert from '../../components/Alert';
import Loading from '../../components/Loading';

const SignIn = () => {
  const { values, errorFirebase, error, loading, handleChange, loginUser } =
    useForm({
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
          <TitleForm block>Te damos la bienvenida!</TitleForm>
          <ParagraphForm fontWhite fontLarge>
            La aplicación es muy buena para realizar un seguimiento de tus
            gastos.
          </ParagraphForm>
        </LeftForm>

        <Form onSubmit={loginUser}>
          <TitleForm block>Iniciar sesión</TitleForm>
          <ParagraphForm fontLarge>
            Para agregar tus gastos, vas a tener que iniciar sesión
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

          {loading ? (
            <Loading />
          ) : (
            <InputForm value="Iniciar Sesión" type="submit" bgBlack fontWhite />
          )}

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
