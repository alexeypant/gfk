import React from 'react';
import { StyledDiv } from './BugSmiling.style';
import { ReactNode } from 'react';

export interface IBugSmilingProps {
  children?: ReactNode;
  onClick?: any;
}

export const BugSmiling = ({children, onClick}: IBugSmilingProps) => (
    <StyledDiv onClick={onClick}>
      {children}
    </StyledDiv>
);
