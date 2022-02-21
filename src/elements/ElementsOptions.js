import styled from 'styled-components';
import theme from '../theme';

export const ContainerSelect = styled.div`
  background: ${theme.grayStrong};
  cursor: pointer;
  color: ${theme.white};
  border-radius: 0.625rem; /* 10px */
  position: relative;
  height: 5rem; /* 80px */
  width: 100%;
  padding: 0px 1.25rem; /* 20px */
  font-size: 1.5rem; /* 24px */
  text-align: center;
  display: flex;
  align-items: center;
  transition: 0.5s ease all;
  margin-top: 0.5rem;
  &:hover {
    background: ${theme.purpleStrong};
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerSelectOptions = styled.div`
  width: 100%;
  @media screen and (min-width: 48rem) {
    width: 40%;
  }
`;

export const OptionSelect = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    width: 1.25rem; /* 20px */
    height: auto;
    margin-left: 1.25rem; /* 20px */
  }
`;

export const Options = styled.div`
  color: ${theme.white};
  background: ${theme.grayStrong};
  position: absolute;
  top: 5.62rem; /* 90px */
  left: 0;
  width: 100%;
  border-radius: 0.625rem; /* 10px */
  max-height: 18.75rem; /* 300px */
  overflow-y: auto;
  z-index: 100;
`;

export const Option = styled.div`
  padding: 1.25rem; /* 20px */
  display: flex;
  svg {
    width: 28px;
    height: auto;
    margin-right: 1.25rem; /* 20px */
  }
  &:hover {
    background: ${theme.purpleStrong};
  }
`;
