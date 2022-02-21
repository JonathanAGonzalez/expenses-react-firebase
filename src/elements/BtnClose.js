import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import theme from '../theme';

const CloseMenu = styled(AiOutlineClose)`
  color: ${theme.white};
  font-size: 2rem;
  align-self: flex-end;
  margin: 1rem;
`;

const BtnClose = ({ setMenuMobile, show }) => {
  return <CloseMenu onClick={() => setMenuMobile(!show)} />;
};

export default BtnClose;
