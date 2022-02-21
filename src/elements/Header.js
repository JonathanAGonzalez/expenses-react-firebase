import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  padding: 1rem 2.5rem; /* 40px */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 60rem) {
    justify-content: space-around;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-weight: normal;
  text-transform: uppercase;
  font-size: 1.5rem; /* 40px */
  @media screen and (max-width: 48rem) {
    font-size: 1.2rem;
  }
`;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 60rem) {
    /* 950px */
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    & > div {
      display: flex;
      margin-bottom: 1.25rem; /* 20px */
      justify-content: end;
    }
  }
`;

const ContainerButtonsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 48rem) {
    display: block;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem; /* 20px */
`;

export {
  Header,
  ContainerButtons,
  ContainerHeader,
  Title,
  ContainerButtonsHeader,
};
