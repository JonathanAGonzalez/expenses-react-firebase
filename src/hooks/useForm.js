import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '../firesbase/firebaConfig';
import { SignInValidation, SignUpValidation } from '../validate';

const initialState = {
  email: '',
  password: '',
  passwordConfirm: '',
};

const useForm = (valuesForm = initialState) => {
  const [values, setValues] = useState(valuesForm);
  const { email, password, passwordConfirm } = values;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [errorFirebase, setErrorFirebase] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const target = e.target;
    setValues({ ...values, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors } = SignUpValidation(
      email,
      password,
      passwordConfirm
    );
    setError({});

    if (!isValid) {
      setError(errors);
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch ({ code }) {
      switch (code) {
        case 'auth/email-already-in-use':
          setErrorFirebase('El correo ya esta en uso');
          break;

        default:
          setErrorFirebase('Ocurrio un error inesperado');
          break;
      }
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { errors, isValid } = SignInValidation(email, password);
    setError({});
    if (!isValid) {
      setError(errors);
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch ({ code }) {
      switch (code) {
        case 'auth/user-not-found':
          setErrorFirebase('El usuario no existe');
          break;

        case 'auth/wrong-password':
          setErrorFirebase('La contraseña es incorrecta');
          break;

        case 'auth/too-many-requests':
          setErrorFirebase('Demasiados intentos fallidos, intente mas tarde');
          break;

        default:
          console.log('Ocurrio un error inesperado');
          break;
      }
    }
  };

  const signOutSesion = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    errorFirebase,
    values,
    error,
    loading,
    handleSubmit,
    handleChange,
    loginUser,
    signOutSesion,
    setValues,
  };
};

export default useForm;
