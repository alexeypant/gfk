import { IRootState } from '../../interfaces/IRootState';
import { defaultState } from '../store/initialState';
import { MultiplicationAction } from '../actions/actionMultiplication';
import { EActionNamesMultiplication } from '../../enums/EActionNamesMultiplication';

export const multiplication = (
    state: IRootState['multiplication'] = defaultState.multiplication,
    action: MultiplicationAction): IRootState['multiplication'] => {
  switch (action.type) {
    case EActionNamesMultiplication.SetBase: {
      return { ...state, base: action.payload };
    }
    default:
      return state;
  }
};
