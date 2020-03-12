import styled from 'styled-components';
import image from './cockroach_moving.png';
import { keyframes } from 'styled-components';

const move = keyframes`
  from {
    background-position:0 0;
  }

  to {
    background-position:0 -400px;
  }
`;

export const StyledDiv = styled.div`
  & {
    position: absolute;
    borderRadius: 50;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background-image: url(${image});
    background-repeat: no-repeat;
    padding-top: 16px;
    animation: ${move} 0.5s steps(10) infinite;
  }
`;


