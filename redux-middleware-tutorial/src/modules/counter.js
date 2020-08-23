import {
  createAction,
  handleActions,
} from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux-actions';
import {
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
  throttle,
} from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux-saga/effects';

const INC = 'counter/INC';
const DEC = 'counter/DEC';

const INC_ASYNC = 'counter/INC_ASYNC';
const DEC_ASYNC = 'counter/DEC_ASYNC';

export const increase = createAction(INC);
export const decrease = createAction(DEC);

// export const incAsync = () => dispatch => {
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000);
// };
// export const decAsync = () => dispatch => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// };

export const incAsync = createAction(INC_ASYNC, () => undefined);
export const decAsync = createAction(DEC_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
  const number = yield select(state => state.counter);
  console.log(`state: ${number}`);
}
function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  // takeEvery handles specific actions for all incoming actions.
  // yield takeEvery(INC_ASYNC, increaseSaga);
  yield throttle(3000, INC_ASYNC, increaseSaga); //this means call once per 3 seconds.
  // takeLatest cancels any work in progress if it exists
  // And only performs the last one executed.
  yield takeLatest(DEC_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = handleActions(
  {
    [INC]: state => state + 1,
    [DEC]: state => state - 1,
  },
  initialState
);

export default counter;
