import { ITask } from '../interfaces/ITask';

export const generateMultiplicationTask = (base: number, choiceCount: number = 3): ITask => {
  const rand = Math.floor(Math.random() * Math.floor(10));
  const correctAnswer = base * rand;
  const task = `${base} x ${rand}`;
  return {
    equation: task,
    choices: [
      { answer: correctAnswer - 3, isCorrect: false },
      { answer: correctAnswer, isCorrect: true },
      { answer: correctAnswer + 3, isCorrect: false },
      { answer: correctAnswer + 6, isCorrect: false },
    ],
  }
};
