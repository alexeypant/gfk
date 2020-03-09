export interface ITask {
  equation: string;
  choices: Array<{answer: number; isCorrect: boolean}>
}
