import React  from 'react';
import { Field } from '../field/Filed';
import { Shelter } from '../shelter/Shelter';
import { useGame } from '../../hooks/useGame';
import { IMultiplicationTask } from '../../interfaces/IMultiplicationTask';
import { generateMultiplicationTasks } from '../../utils/generateMultiplicationTasks';
import { Cockroach } from '../cockroach/Cockroach';

const tasks: IMultiplicationTask[] = generateMultiplicationTasks(6, 4);

export interface IGameProps {
  fieldWidth: number;
  fieldHeight: number;
}

const ChipModel: any = Cockroach;

export const Game = ({fieldWidth, fieldHeight}: IGameProps) => {
  const [chips, banks] = useGame(fieldWidth, fieldHeight, tasks, ChipModel);
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
