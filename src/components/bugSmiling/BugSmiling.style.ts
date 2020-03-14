import styled, { keyframes } from 'styled-components';
import image from './bug_smile_80_560.png';

const move = keyframes`
  from {
    background-position:0 0;
  }

  to {
    background-position:0 -560px;
  }
`;

export const StyledDiv = styled.div`
  & {
    height: 80px;
    width: 80px;
    background-image: url(${image});
    background-repeat: no-repeat;
    animation: ${move} 0.5s steps(7) infinite;
    position: relative;
  }
`;
