import { createStore } from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

const ADD = 'add';
const DEL = 'delete';

// export
const addTODO = text => {
  return {
    type: ADD,
    text,
  };
};
// export
const delTODO = id => {
  return {
    type: DEL,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DEL:
      return state.filter(toDo => toDo.id !== action.id);
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
