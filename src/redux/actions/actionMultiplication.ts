import { EActionNamesMultiplication } from '../../enums/EActionNamesMultiplication';

export interface IActionSetBase {
  payload: number;
  type: EActionNamesMultiplication.SetBase;
}

export const setBase = (base: number): IActionSetBase => ({
  payload: base,
  type: EActionNamesMultiplication.SetBase,
});

export type MultiplicationAction = IActionSetBase;
