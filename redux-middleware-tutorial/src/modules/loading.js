import {
  createAction,
  handleActions,
} from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux-actions';

const START = 'loading/START';
const FINISH = 'loading/FINISH';

export const startLoading = createAction(START, requestType => requestType);
export const finishLoading = createAction(FINISH, requestType => requestType);

const initialState = {};

const loading = handleActions(
  {
    [START]: (state, action) => {
      return {
        ...state,
        [action.payload]: true,
      };
    },
    [FINISH]: (state, action) => {
      return {
        ...state,
        [action.payload]: false,
      };
    },
  },
  initialState
);
export default loading;
