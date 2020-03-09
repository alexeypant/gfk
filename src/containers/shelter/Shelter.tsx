import React, { ReactNode, ReactNodeArray } from 'react';
import { StyledShelter, StyledShelterItem } from './Shelter.style';

export interface IShelterProps {
  children?: ReactNode[];
}

export const Shelter = ({ children}: IShelterProps) => {
  return <StyledShelter>
    {children?.map(child => <StyledShelterItem>{child}</StyledShelterItem>)}
  </StyledShelter>
};
