import { GoSignOut } from 'react-icons/go';
import Button from '../elements/Button';
import useForm from '../hooks/useForm';

const BtnSignOut = () => {
  const { signOutSesion } = useForm();
  return (
    <Button bigIcon as="button" onClick={signOutSesion}>
      <GoSignOut />
    </Button>
  );
};

export default BtnSignOut;
