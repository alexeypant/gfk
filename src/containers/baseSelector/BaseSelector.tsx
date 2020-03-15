import React from 'react';
import { StyledBase, StyledBaseLabel, StyledCompletion, StyledWrapper } from './BaseSelector.style';
import { useDispatch, useSelector } from 'react-redux';
import { setBase } from '../../redux/actions/actionMultiplication';
import { multiplicationBases } from '../../constants/gameConfig';
import { BugSmiling } from '../../components/bugSmiling/BugSmiling';
import { IRootState } from '../../interfaces/IRootState';
import { ICompletions } from '../../interfaces/ICompletions';

export const BaseSelector = () => {
    const dispatch = useDispatch();
    const handleSelectBase = (base: number, e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        dispatch(setBase(base));
    };
    const completions = useSelector<IRootState, ICompletions>(state => state.user.completionsCount);
    return (
        <StyledWrapper>
            {multiplicationBases.map((base) =>
                (<StyledBase key={base} onClick={(e: React.MouseEvent<HTMLDivElement>) => handleSelectBase(base, e)}>
                    <BugSmiling>
                        <StyledBaseLabel>
                            {base}
                        </StyledBaseLabel>
                        <StyledCompletion>
                            {completions[base]}
                        </StyledCompletion>
                    </BugSmiling>
                </StyledBase>))}
        </StyledWrapper>
    );
};
