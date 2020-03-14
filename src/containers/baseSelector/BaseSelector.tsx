import React from 'react';
import { StyledBase, StyledBaseLabel, StyledWrapper } from './BaseSelector.style';
import { useDispatch } from 'react-redux';
import { setBase } from '../../redux/actions/actionMultiplication';
import { multiplicationBases } from '../../constants/gameConfig';
import { BugSmiling } from '../../components/bugSmiling/BugSmiling';

export const BaseSelector = () => {
    const dispatch = useDispatch();
    const handleSelectBase = (base: number, e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        dispatch(setBase(base));
    };
    return (
        <StyledWrapper>
            {multiplicationBases.map((base) =>
                (<StyledBase key={base} onClick={(e: React.MouseEvent<HTMLDivElement>) => handleSelectBase(base, e)}>
                    <BugSmiling>
                        <StyledBaseLabel>
                            {base}
                        </StyledBaseLabel>
                    </BugSmiling>
                </StyledBase>))}
        </StyledWrapper>
    );
};
