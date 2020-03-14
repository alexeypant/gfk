import React from 'react';
import { StyledBase, StyledButton, StyledWrapper } from './BaseSelector.style';
import { useDispatch } from 'react-redux';
import { setBase } from '../../redux/actions/actionMultiplication';
import { multiplicationBases } from '../../constants/gameConfig';

export const BaseSelector = () => {
    const dispatch = useDispatch();
    const handleSelectBase = (base: number, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(setBase(base));
    };
    return (
        <StyledWrapper>
            {multiplicationBases.map(base =>
                (<StyledBase>
                    <StyledButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSelectBase(base, e)}>
                        {base}
                    </StyledButton>
                </StyledBase>))}
        </StyledWrapper>
    );
};
