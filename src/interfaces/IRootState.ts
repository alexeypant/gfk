import { ICompletions } from './ICompletions';

export interface IRootState {
  multiplication: {
    base: number;
  };
  user: {
    completionsCount: ICompletions;
  };
}
