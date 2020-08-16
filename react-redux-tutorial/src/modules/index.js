import { combineReducers } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux';
import counter from './counter';
import todo from './todo';

const rootReducer = combineReducers({ counter, todo });
export default rootReducer;
