const useErrorFirebase = (err) => {
  let error = '';
  switch (err) {
    case 'auth/email-already-in-use':
      error = 'El correo electronico ya esta en uso';
      break;

    default:
      error = 'Ocurrio un error inesperado';
      break;
  }
  return error;
};

export default useErrorFirebase;
