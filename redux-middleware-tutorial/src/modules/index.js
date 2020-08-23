import { combineReducers } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux';
import counter from './counter';
import sample from './sample';
import loading from './loading';

const rootReducer = combineReducers({ counter, sample, loading });

export default rootReducer;
