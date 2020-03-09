import React, { useState } from 'react';
import { IChip } from '../interfaces/IChip';
import { Cockroach } from '../containers/cockroach/Cockroach';
import { getNextPosition } from '../utils/getNextPosition';
import { getDirection } from '../utils/getDirection';
import { IDroppedItem } from '../interfaces/IDroppableItem';
import { IBank } from '../interfaces/IBank';
import { Bank } from '../containers/bank/Bank';
import { IMultiplicationTask } from '../interfaces/IMultiplicationTask';

export type TUseGame = [IChip[], IBank[]];
export const useGame = (fieldWidth: number, fieldHeight: number, tasks: IMultiplicationTask[]): TUseGame => {

  const [chips, setChips] = useState<Array<IChip>>(() => tasks.map((task, index) => ({
    uuid: task.answer,
    model: (<Cockroach
        key={task.answer}
        uuid={task.answer}
        xStart={50}
        yStart={50}
        movingFn={(x, y) => getNextPosition(x, y, getDirection(index), fieldWidth!, fieldHeight!, task.answer)}
        content={task.answer}
    />)
  })));

  const handleDrop = (item: IDroppedItem, bankUuid: string) => {
    const isCorrectBank = item.uuid === bankUuid;
    if (isCorrectBank) {
      setChips(chips => chips.filter(chip => chip.uuid !== item.uuid));
      setBanks(banks => {
        const affectedBank: IBank = banks.find(bank => bank.uuid === bankUuid)!;
        const updatedBank: IBank = { ...affectedBank!, isFull: true };
        return banks.map(bank => bank.uuid === bankUuid ? updatedBank : bank);
      });
    }
  };

  const [banks, setBanks] = useState<Array<IBank>>(() => tasks.map((task) => ({
    uuid: task.answer,
    isFull: false,
    model: (<Bank key={task.answer} onDrop={handleDrop} uuid={task.answer}><span>{task.equation}</span></Bank>),
    modelFull: (<Bank key={task.answer} onDrop={handleDrop} uuid={`${task.answer}`}><span>Yes</span></Bank>),
  })));

  return [chips, banks];
};
