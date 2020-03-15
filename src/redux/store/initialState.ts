import { IRootState } from '../../interfaces/IRootState';

export const defaultState: IRootState = {
  multiplication: {
    base: 1,
  },
  user: {
    completionsCount: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    }
  },
};
