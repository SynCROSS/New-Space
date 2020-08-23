import { combineReducers } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux';
import { all } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux-saga/effects';
import counter, { counterSaga } from './counter';
import sample, { sampleSaga } from './sample';
import loading from './loading';

const rootReducer = combineReducers({ counter, sample, loading });

export function* rootSaga() {
  // 'all' function makes many sagas one.
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
