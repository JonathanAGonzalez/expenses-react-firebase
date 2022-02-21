import styled, { keyframes } from 'styled-components';
import theme from '../theme';
const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); /* 20px */
    }
 
    10% {
        transform: translateY(1.25rem);
    }
    
    90% {
        transform: translateY(1.25rem)
    }
 
    100% {
        transform: translateY(1.25rem);
    }
`;

const ContainerAlert = styled.div`
  z-index: 100;
  width: 100%;
  position: fixed;
  left: 0;
  top: 1.25rem; /* 20px */
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideDown} 4s ease forwards;
  p {
    ::before {
      content: '';
      background: ${(props) =>
        props.type === 'error' ? theme.red : theme.green};
      border-radius: 0.31rem 0 0 0.31rem;
      width: 0.5rem;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 1000;
      position: absolute;
    }
    color: ${(props) => (props.type === 'error' ? theme.red : theme.green)};
    background: #fff;
    padding: 1.25rem 2.5rem; /* 20px 40px */
    border-radius: 0.31rem; /* 5px */
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    position: relative;
  }
`;

const Alert = ({ type, msg }) => {
  return (
    <ContainerAlert type={type}>
      <p>{msg}</p>
    </ContainerAlert>
  );
};

export default Alert;
