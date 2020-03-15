import { IRootState } from '../../interfaces/IRootState';
import { defaultState } from '../store/initialState';
import { UserAction } from '../actions/actionUser';
import { EActionNamesUser } from '../../enums/EActionNamesUser';

export const user = (
    state: IRootState['user'] = defaultState.user,
    action: UserAction): IRootState['user'] => {
  switch (action.type) {
    case EActionNamesUser.SetCompleted: {
      const base = action.payload;
      const currentCount = state.completionsCount[base];
      return { ...state, completionsCount: { ...state.completionsCount, [base]: currentCount + 1 } };
    }
    default:
      return state;
  }
};
