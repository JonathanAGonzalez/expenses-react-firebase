import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }

`;

const ContainerLoading = styled.div`
  position: relative;
  div {
    width: 82px;
    height: 82px;
    border-top: 2px solid #e0607e;
    border-left: 2px solid #e0607e;
    border-bottom: 1px solid #e0607e;
    border-radius: 50%;
    animation: ${loadingAnimation} 1s linear infinite;
  }
  p {
    position: absolute;
    top: calc(50% - 14px / 2);
    font-size: 14px;
    left: 3px;
    color: #e0607e;
  }
`;

const Loading = () => {
  return (
    <ContainerLoading>
      <div></div>
      <p>Cargando...</p>
    </ContainerLoading>
  );
};

export default Loading;
