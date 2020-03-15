import React, { useState } from 'react';
import { IChip } from '../interfaces/IChip';
import { getNextPosition } from '../utils/getNextPosition';
import { getDirection } from '../utils/getDirection';
import { IDroppedItem } from '../interfaces/IDroppableItem';
import { IBank } from '../interfaces/IBank';
import { Bank } from '../containers/bank/Bank';
import { IMultiplicationTask } from '../interfaces/IMultiplicationTask';
import { generateMultiplicationTasks } from '../utils/generateMultiplicationTasks';
import { tasksCount } from '../constants/gameConfig';
import { BugBasket } from '../components/bugBusket/BugBasket';

export interface IUseGame {
  chips: IChip[];
  banks: IBank[];
  updateGame: (base: number) => void;
}

export const useGame = (
    fieldWidth: number,
    fieldHeight: number,
    base: number,
    ChipName: any,
    onComplete: (base: number) => void,
): IUseGame => {

  const generateChips = (tasks: IMultiplicationTask[]) => tasks.map((task, index) => ({
    uuid: task.answer,
    model: (<ChipName
        key={task.answer}
        uuid={task.answer}
        xStart={50}
        yStart={50}
        movingFn={(x: number, y: number) => getNextPosition(x, y, getDirection(index), fieldWidth!, fieldHeight!, task.answer)}
        content={task.answer}
    />)
  }));

  const generateBanks = (tasks: IMultiplicationTask[]) => tasks.map((task) => ({
    uuid: task.answer,
    isFull: false,
    model: (<Bank key={task.answer} onDrop={handleDrop} uuid={task.answer}><BugBasket label={task.equation} /></Bank>),
    modelFull: (<Bank key={task.answer} onDrop={handleDrop} uuid={`${task.answer}`}><BugBasket label={task.equation} isFull /></Bank>),
  }));

  const handleDrop = (item: IDroppedItem, bankUuid: string) => {
    const isCorrectBank = item.uuid === bankUuid;
    if (isCorrectBank) {
      setChips(chips => chips.filter(chip => chip.uuid !== item.uuid));
      setBanks(banks => {
        const affectedBank: IBank = banks.find(bank => bank.uuid === bankUuid)!;
        const updatedBank: IBank = { ...affectedBank!, isFull: true };
        const updatedBanks: IBank[] = banks.map(bank => bank.uuid === bankUuid ? updatedBank : bank);
        const isCompletedTask: boolean = updatedBanks.filter(bank => !bank.isFull).length === 0;
        if (isCompletedTask) {
          onComplete(base);
        }
        return updatedBanks;
      });
    }
  };

  const [tasks, setTasks] = useState<IMultiplicationTask[]>(() => generateMultiplicationTasks(base, tasksCount));
  const [chips, setChips] = useState<Array<IChip>>(() => generateChips(tasks));
  const [banks, setBanks] = useState<Array<IBank>>(() => generateBanks(tasks));

  const updateGame = (base: number) => {
    const newTasks = generateMultiplicationTasks(base, tasksCount);
    setTasks(newTasks);
    setChips(() => generateChips(newTasks));
    setBanks(() => generateBanks(newTasks));
  };

  return { chips, banks, updateGame };
};
