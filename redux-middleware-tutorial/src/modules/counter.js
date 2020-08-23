import {
  createAction,
  handleActions,
} from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux-actions';

const INC = 'counter/INC';
const DEC = 'counter/DEC';

export const increase = createAction(INC);
export const decrease = createAction(DEC);

export const incAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};
export const decAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialState = 0;

const counter = handleActions(
  {
    [INC]: state => state + 1,
    [DEC]: state => state - 1,
  },
  initialState
);

export default counter;
