import React, { ReactNode } from 'react';
import { StyledPlayground } from './Playground.style';

export interface IFieldProps {
  refToElement: any;
  children?: ReactNode;
}


export const Playground = ({ children, refToElement}: IFieldProps) => {
  return <StyledPlayground ref={refToElement}>
    {children}
  </StyledPlayground>
};
