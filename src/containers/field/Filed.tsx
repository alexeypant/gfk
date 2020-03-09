import React, { ReactNodeArray } from 'react';
import { StyledField } from './Filed.style';

export interface IFieldProps {
  children?: ReactNodeArray;
}


export const Field = ({ children}: IFieldProps) => {
  return <StyledField>
    {children}
  </StyledField>
};
