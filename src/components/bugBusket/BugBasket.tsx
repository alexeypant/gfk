import React from 'react';
import { StyledDiv, StyledLabel } from './BugBusket.style';

export interface IBugBasket {
  label: string;
  isFull?: boolean;
}

export const BugBasket = ({label, isFull}: IBugBasket) => (
    <StyledDiv isFull={isFull}>
      <StyledLabel>{label}</StyledLabel>
    </StyledDiv>
);
