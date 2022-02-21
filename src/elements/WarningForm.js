import styled from 'styled-components';

const ErrorPharagraph = styled.p`
  color: #fff;
  @media screen and (min-width: 48rem) {
    color: #e91e63;
  }
`;

const ContainerError = styled.div`
  align-self: flex-start;
  margin-left: 1.5rem;
`;

const Error = ({ msg }) => {
  return (
    <ContainerError>
      <ErrorPharagraph>❗{msg}</ErrorPharagraph>
    </ContainerError>
  );
};

export default Error;
