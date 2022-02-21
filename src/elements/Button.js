import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../theme';

const Button = styled(Link)`
  background: ${(props) => (props.primario ? '#5B69E2' : '#303036')};
  width: ${(props) => (props.conIcono ? '15.62rem' : 'auto')}; /* 250px */
  border: none;
  border-radius: 0.625rem; /* 10px */
  color: #fff;
  height: 4.75rem; /* 60px */
  padding: 1.25rem 1.87rem; /* 20px 30px */
  font-size: 1.25rem; /* 20px */
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  outline: none;
  transition: 0.5s;
  margin: 1rem 0;
  &:hover {
    background: ${theme.purple};
  }
  svg {
    height: ${(props) => (props.bigIcon ? '100%' : '0.75rem;')}; /* 12px */
    fill: white;
  }

  @media screen and (max-width: 48rem) {
    display: block;
  }
`;

export default Button;
