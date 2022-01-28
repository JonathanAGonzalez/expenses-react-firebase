import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Abstract } from '../assets/images/abstract.svg';

const Svg = styled.svg`
  height: 50vh;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 0;
  path {
    fill: #e0607e;
  }
`;

const AbstractTop = styled(Abstract)`
  position: fixed;
  z-index: 1;
  top: 2.5rem; /* 40px */
  left: 2.5rem; /* 40px */
`;

const AbstractBottom = styled(Abstract)`
  position: fixed;
  z-index: 1;
  bottom: 2.5rem; /* 40px */
  right: 2.5rem; /* 40px */
`;

const Background = () => {
  return (
    <>
      <AbstractTop />
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fillOpacity="1"
          d="M0,96L40,112C80,128,160,160,240,192C320,224,400,256,480,229.3C560,203,640,117,720,106.7C800,96,880,160,960,197.3C1040,235,1120,245,1200,224C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </Svg>
      <AbstractBottom />
    </>
  );
};

export default Background;
