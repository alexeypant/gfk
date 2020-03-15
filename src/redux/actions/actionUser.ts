import { EActionNamesUser } from '../../enums/EActionNamesUser';

export interface IActionSetCompleted {
  payload: number;
  type: EActionNamesUser.SetCompleted;
}

export const setCompleted = (base: number): IActionSetCompleted => ({
  payload: base,
  type: EActionNamesUser.SetCompleted,
});

export type UserAction = IActionSetCompleted;
