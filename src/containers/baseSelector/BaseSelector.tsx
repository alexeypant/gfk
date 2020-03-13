import React from 'react';
import { StyledBase, StyledButton, StyledWrapper } from './BaseSelector.style';

const bases = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export interface IBaseSelectorProps {
    setBase: (newBase: number) => void;
}

export const BaseSelector = ({setBase}: IBaseSelectorProps) => {
    const handleSelectBase = (base: number, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setBase(base);
    };
    return (
        <StyledWrapper>
            {bases.map(base => (<StyledBase><StyledButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSelectBase(base, e)}>{base}</StyledButton></StyledBase>))}
        </StyledWrapper>
);
};
