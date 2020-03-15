import styled from 'styled-components';
import basket_empty from './basket_empty.png';
import basket_full from './basket_full.png';

export interface IStyledDivProps {
  isFull?: boolean
}

export const StyledDiv = styled.div<IStyledDivProps>`
  & {
    height: 100%;
    width: 100%;
    background-image: ${({isFull}) => isFull ? `url(${basket_full})` : `url(${basket_empty})`};
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
  }
`;

export const StyledLabel = styled.span`
  position: absolute;
  font-size: 2em;
  top: 30%;
  left: 30%;
`;

