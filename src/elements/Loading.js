import styled, { keyframes } from 'styled-components';
import theme from '../theme';

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
    border-top: 2px solid ${theme.purple};
    border-left: 2px solid ${theme.purple};
    border-bottom: 1px solid ${theme.purple};
    border-radius: 50%;
    animation: ${loadingAnimation} 1s linear infinite;
  }
  p {
    position: absolute;
    top: calc(50% - 14px / 2);
    font-size: 14px;
    left: 3px;
    color: ${theme.purpleStrong};
  }
`;

export default ContainerLoading;
