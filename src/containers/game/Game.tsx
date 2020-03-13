import React, { useEffect } from 'react';
import { Field } from '../field/Filed';
import { Shelter } from '../shelter/Shelter';
import { useGame } from '../../hooks/useGame';
import { Cockroach } from '../cockroach/Cockroach';

export interface IGameProps {
  fieldWidth: number;
  fieldHeight: number;
  base: number;
}

const ChipModel: any = Cockroach;

export const Game = ({fieldWidth, fieldHeight, base}: IGameProps) => {
  const { chips, banks, updateGame } = useGame(fieldWidth, fieldHeight, base, ChipModel);
  useEffect(() => updateGame(base), [base]);
  return (
      <div style={{height: '100%', width: '100%' }}>
        <Field >
          {chips.map(chip => chip.model)}
        </Field>
        <Shelter>
          {banks.map(bank => bank.isFull ? bank.modelFull : bank.model)}
        </Shelter>
      </div>
  );
};
