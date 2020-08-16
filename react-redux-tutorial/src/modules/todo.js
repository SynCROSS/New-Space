import {
  createAction,
  handleActions,
} from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux-actions';

import produce from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/immer';

const CHANGE = 'todo/CHANGE',
  INSERT = 'todo/INSERT',
  TOGGLE = 'todo/TOGGLE',
  REMOVE = 'todo/REMOVE';

let id = 0;

export const change = createAction(CHANGE, input => input);
export const insert = createAction(INSERT, text => {
  return {
    id: id++,
    text,
    done: false,
  };
});
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

// export const change = input => {
//   return {
//     type: CHANGE,
//     input,
//   };
// };
// export const insert = text => {
//   return {
//     type: INSERT,
//     toDo: {
//       id: id++,
//       text,
//       done: false,
//     },
//   };
// };
// export const toggle = id => {
//   return {
//     type: TOGGLE,
//     id,
//   };
// };
// export const remove = id => {
//   return {
//     type: REMOVE,
//     id,
//   };
// };

const initialState = {
  input: '',
  toDos: [],
};

const todo = handleActions(
  {
    [CHANGE]: (state, { payload: input }) =>
      produce(state, draft => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: toDo }) =>
      produce(state, draft => {
        draft.toDos.push(toDo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, draft => {
        const toDo = draft.toDos.map(toDo => toDo.id === id);
        toDo.done = !toDo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, draft => {
        const index = draft.toDos.findIndex(toDo => toDo.id === id);
        draft.toDos.splice(index, 1);
      }),
  },
  initialState
);
// const todo = handleActions(
//   {
//     [CHANGE]: (state, { payload: input }) => {
//       return {
//         ...state,
//         input,
//       };
//     },
//     [INSERT]: (state, { payload: toDo }) => {
//       return {
//         ...state,
//         toDos: state.toDos.concat(toDo),
//       };
//     },
//     [TOGGLE]: (state, { payload: id }) => {
//       return {
//         ...state,
//         toDos: state.toDos.map(toDo =>
//           toDo.id === id ? { ...toDo, done: !toDo.done } : toDo
//         ),
//       };
//     },
//     [REMOVE]: (state, { payload: id }) => {
//       return {
//         ...state,
//         toDos: state.toDos.filter(toDo => toDo.id !== id),
//       };
//     },
//   },
//   initialState
// );

// const todo = (state = initialState, action) => {
//   switch (action.type) {
//     case CHANGE:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         toDos: state.toDos.concat(action.toDo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         toDos: state.toDos.map(toDo =>
//           toDo.id === action.id ? { ...toDo, done: !toDo.done } : toDo
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         toDos: state.toDos.filter(toDo => toDo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// };

export default todo;
