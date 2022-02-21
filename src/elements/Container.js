import styled from 'styled-components';

const Contenedor = styled.main`
  background: #fff;
  box-shadow: 0px 1.25rem 2.5rem rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.625rem;
  width: 90%;
  max-width: 90rem;
  height: 90vh;
  max-height: 60rem;
  overflow-y: auto;
  margin: auto;
  @media (max-width: 60rem) {
    height: 95vh;
    max-height: none;
  }
`;

export default Contenedor;
