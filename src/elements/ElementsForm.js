import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../theme';
import backgroundImage from '../assets/images/background.jpg';

const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 48rem) {
    width: 100%;
    height: 100%;
    margin: auto;
    background: url(${backgroundImage});
    background-size: cover;
    padding-top: 10rem;
    justify-content: flex-start;
  }
`;

const InputForm = styled.input`
  width: 90%;
  background: ${(props) => (props.bgBlack ? '#222' : '#fff')};
  border: 1px solid transparent;
  border-bottom: 2px solid ${theme.white};
  border-radius: 0.3rem;
  outline: none;
  padding: 1.5rem 0.5rem;
  color: ${(props) => (props.fontWhite ? '#f3f3f3' : '#222')};
  position: relative;
  &::before {
    content: '10000';
    font-size: 4rem;
  }
  &[type='submit'] {
    cursor: pointer;
    transition: ease 0.6s;
    &:hover {
      background: ${theme.purple};
    }
  }
`;

const InputBig = styled(InputForm)`
  font-size: 4.37rem; /* 70px */
  font-weight: bold;
`;

const TitleForm = styled.h2`
  font-size: ${(props) => (props.fontLarge ? '3.5rem' : '2rem')};
  font-weight: 600;
  color: ${(props) => (props.fontWhite ? theme.white : theme.grayStrong)};
  text-align: center;
  margin: 1rem 0;
  @media screen and (min-width: 48rem) {
    display: ${(props) => (props.block ? 'block' : 'none')};
  }
`;

const ParagraphForm = styled.p`
  color: ${(props) => (props.fontWhite ? theme.white : theme.grayStrong)};
  font-size: ${(props) => (props.fontLarge ? '1.2rem' : '1rem')};
  @media screen and (max-width: 48rem) {
    display: ${(props) => (props.block ? 'block' : 'none')};
    color: ${theme.white};
  }
`;

const AnchorForm = styled(Link)`
  color: ${(props) => (props.fontWite ? theme.white : theme.grayStrong)};
  font-weight: bold;
  @media screen and (max-width: 48rem) {
    color: ${theme.white};
  }
`;

const LeftForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.4rem;
  color: ${theme.white};
  width: 30%;
  text-align: center;
  line-height: 2rem;
  background: url(${backgroundImage});
  background-size: cover;
  @media screen and (max-width: 48rem) {
    display: none;
  }
`;

const ContainerForm = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 14vh;
  font-size: 1.5rem; /* 40px */
  border: none;
  border-bottom: 2px solid ${theme.lightGray};
  outline: none;
  resize: none;
  @media (max-width: 48rem) {
    font-size: 1.3rem; /* 24px */
  }
`;

const ContainerFilters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.87rem; /* 30px */
  @media (max-width: 60rem) {
    /* 950px */
    flex-direction: column;

    & > * {
      width: 100%;
      margin-bottom: 0.62rem; /* 10px */
    }
  }
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0; /* 40px */
`;

const FormExpenses = styled.form`
  padding: 0 2.5rem; /* 40px */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  input {
    width: 100%;
    text-align: center;
    padding: 2.5rem 0;
    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 60rem) {
    /* 950px */
    justify-content: start;
  }
`;

export {
  Form,
  FormExpenses,
  TitleForm,
  ParagraphForm,
  AnchorForm,
  InputForm,
  InputBig,
  LeftForm,
  ContainerForm,
  ContainerFilters,
  ContainerButton,
  TextArea,
};
