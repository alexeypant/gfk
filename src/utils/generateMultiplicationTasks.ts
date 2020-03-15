import { IMultiplicationTask } from '../interfaces/IMultiplicationTask';

export const generateMultiplicationTasks = (base: number, tasksCount: number = 4): IMultiplicationTask[] => {
  let numbers: number[] = [];
  while(numbers.length < tasksCount) {
    const rand = Math.floor(Math.random() * Math.floor(10));
    !numbers.includes(rand) && numbers.push(rand);
  }
  return numbers.map(num => ({ equation: `${base} x ${num}`, answer: `${num * base}`}));
};
