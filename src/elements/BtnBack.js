import styled from 'styled-components';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
const Btn = styled.button`
  display: block;
  width: 3.12rem;
  height: 3.12rem;
  line-height: 3.12rem;
  text-align: center;
  margin-right: 1.25rem;
  border: none;
  background: #303036;
  color: #fffaff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.31rem;
  cursor: pointer;
  @media (max-width: 60rem) {
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
  }
`;

const Icon = styled(IoIosArrowDropleftCircle)`
  width: 50%;
  height: auto;
  fill: #fff;
`;

const BtnBack = ({ route = '/' }) => {
  const navigate = useNavigate();
  return (
    <Btn onClick={() => navigate(route)}>
      <Icon />
    </Btn>
  );
};

export default BtnBack;
