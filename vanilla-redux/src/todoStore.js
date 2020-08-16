import { createStore } from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/redux';
import { createAction } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/@reduxjs/toolkit/';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const ADD = 'add';
// const DEL = 'delete';

const addTODO = createAction('add');
// const addTODO = createAction(ADD);
const delTODO = createAction('delete');
// const delTODO = createAction(DEL);

// // export
// const addTODO = text => {
//   return {
//     type: ADD,
//     text,
//   };
// };
// // export
// const delTODO = id => {
//   return {
//     type: DEL,
//     id: parseInt(id),
//   };
// };

const reducer = (state = [], action) => {
  switch (action.type) {
    case addTODO.type:
      // case ADD:
      return [{ text: action.payload, id: Date.now() }, ...state];
    // return [{ text: action.text, id: Date.now() }, ...state];
    case delTODO.type:
      // case DEL:
      return state.filter(toDo => toDo.id !== action.payload);
    // return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};

const todoStore = createStore(reducer);

export const actionCreators = {
  addTODO,
  delTODO,
};
export default todoStore;
