// import { createStore } from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/redux';
import {
  // createAction,
  // createReducer,
  configureStore,
  createSlice,
} from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/@reduxjs/toolkit/';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const ADD = 'add';
// const DEL = 'delete';

/* const addTODO = createAction('add');
// const addTODO = createAction(ADD);
const delTODO = createAction('delete');
// const delTODO = createAction(DEL); */

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

/* const reducer = createReducer([], {
  //If who wanna return a state 1in immediate way in createReducer, that state must be new state.
  //but putting that the other way if who wanna mutate state, that state must not be returned
  [addTODO]: (state, action) => {
    //Mutating state
    state.push({ text: action.payload, id: Date.now() });
  },
  [delTODO]: (state, action) =>
    //Returning new state
    state.filter(toDo => toDo.id !== action.payload),
  // [delTODO]: (state, action) => state.filter(toDo => toDo.id !== action.id),
}); */
/* const reducer = (state = [], action) => {
  switch (action.type) {
    case addTODO.type:
      // case ADD:
      return [{ text: action.payload, id: Date.now() }, ...state];
    // return [{ text: action.text, id: Date.now() }, ...state];
    case delTODO.type:
      // case DEL:
      return state.filter(toDo => toDo.id !== action.payload );
    // return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
}; */

const toDo = createSlice({
  name: 'toDoReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.reverse();
      state.push({ text: action.payload, id: Date.now() });
      state.reverse();
    },
    del: (state, action) => state.filter(toDo => toDo.id !== action.payload),
  },
});

// const todoStore = configureStore({ reducer: toDo.reducer });
// const todoStore = createStore(reducer);

export const { add, del } = toDo.actions;

// export const actionCreators = {
//   addTODO,
//   delTODO,
// };
// export default todoStore;
export default configureStore({ reducer: toDo.reducer });
