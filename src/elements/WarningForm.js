import styled from 'styled-components';

const ErrorPharagraph = styled.p`
  color: red;
  font-style: italic;
  margin: 10px 0px;
`;

const Error = ({ msg }) => {
  return <ErrorPharagraph>{msg}</ErrorPharagraph>;
};

export default Error;
