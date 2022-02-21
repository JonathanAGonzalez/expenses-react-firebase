import styled from 'styled-components';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import theme from '../theme';

const Btn = styled.button`
  display: flex;
  align-items: center;
  color: ${theme.white};
  cursor: pointer;
  gap: 1rem;
  border: none;
  border-radius: 0.31rem;
  padding: 1rem 2rem;
  background: ${theme.grayStrong};
  transition: ease 0.6s;
  &:hover {
    background: ${theme.purpleStrong};
  }
`;

const Icon = styled(IoIosArrowDropleftCircle)`
  width: 2rem;
  height: auto;
  fill: ${theme.white};
`;

const BtnBack = ({ route = '/', text }) => {
  const navigate = useNavigate();

  return (
    <Btn onClick={() => navigate(route)}>
      <Icon />
      {text}
    </Btn>
  );
};

export default BtnBack;
