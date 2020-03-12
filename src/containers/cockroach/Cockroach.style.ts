import styled from 'styled-components';
import image from './cockroach_40px.png';

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
  }
`;

