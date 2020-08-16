const CHANGE = 'todo/CHANGE',
  INSERT = 'todo/INSERT',
  TOGGLE = 'todo/TOGGLE',
  REMOVE = 'todo/REMOVE';

export const change = input => {
  return {
    type: CHANGE,
    input,
  };
};
let id = 0;
export const insert = text => {
  return {
    type: INSERT,
    toDo: {
      id: id++,
      text,
      done: false,
    },
  };
};

export const toggle = id => {
  return {
    type: TOGGLE,
    id,
  };
};
export const remove = id => {
  return {
    type: REMOVE,
    id,
  };
};
const initialState = {
  input: '',
  toDos: [],
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        toDos: state.toDos.concat(action.toDo),
      };
    case TOGGLE:
      return {
        ...state,
        toDos: state.toDos.map(toDo =>
          toDo.id === action.id ? { ...toDo, done: !toDo.done } : toDo
        ),
      };
    case REMOVE:
      return {
        ...state,
        toDos: state.toDos.filter(toDo => toDo.id !== action.id),
      };
    default:
      return state;
  }
};
export default todo;
