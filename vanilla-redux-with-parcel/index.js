import { createStore } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux';

const toggle = document.querySelector('.toggle'),
  count = document.querySelector('h1'),
  btnInc = document.querySelector('#inc'),
  btnDec = document.querySelector('#dec');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => {
  return {
    type: TOGGLE_SWITCH,
  };
};
const increase = difference => {
  return {
    type: INCREASE,
    difference,
  };
};
const decrease = () => {
  return {
    type: DECREASE,
  };
};

const initialState = {
  toggle: false,
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
const cntStore = createStore(reducer);

const render = () => {
  const state = cntStore.getState();
  if (state.toggle) {
    toggle.classList.add('active');
  } else {
    toggle.classList.remove('active');
  }
  count.innerText = state.counter;
};
render();
cntStore.subscribe(render);
toggle.onclick = () => {
  cntStore.dispatch(toggleSwitch());
};
btnInc.onclick = () => {
  cntStore.dispatch(increase(1));
};
btnDec.onclick = () => {
  cntStore.dispatch(decrease());
};
