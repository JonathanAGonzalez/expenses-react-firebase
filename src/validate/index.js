import validate from 'validate.js';

export const SignUpValidation = (email, name, password, passwordConfirm) => {
  const validationErrors = {};
  const validateEmail = validate.single(email, { presence: true, email: true });
  const validateName = validate.single(name, {
    presence: true,
    length: { minimum: 3 },
  });
  const validatePassword = validate.single(password, {
    presence: true,
    length: { minimum: 6, maximum: 30 },
  });

  if (validateEmail) {
    validationErrors.email = 'El correo electronico no es valido';
  }

  if (validateName) {
    validationErrors.name = 'El nombre tiene que tenes una longitud de 3';
  }

  if (validatePassword) {
    validationErrors.password =
      'La contraseña debe ser entre 6 y 30 caracteres';
  }

  if (password !== passwordConfirm) {
    validationErrors.passwordConfirm = 'Las contraseñas deben ser iguales';
  }

  return {
    isValid: Object.keys(validationErrors).length === 0,
    errors: validationErrors,
  };
};

export const SignInValidation = (email, password) => {
  const validationErrors = {};
  const validateEmail = validate.single(email, { presence: true, email: true });
  const validatePassword = validate.single(password, {
    presence: true,
    length: { minimum: 6, maximum: 30 },
  });

  if (validateEmail) {
    validationErrors.email = 'El correo electronico no es valido';
  }

  if (validatePassword) {
    validationErrors.password =
      'La contraseña debe ser entre 6 y 30 caracteres';
  }
  return {
    isValid: Object.keys(validationErrors).length === 0,
    errors: validationErrors,
  };
};
