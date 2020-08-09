import { createStore } from 'C:/../Users/kuuha/AppData/Roaming/npm/node_modules/redux';

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
// const num = document.getElementById('num');
const num = document.querySelector('div');

const setCnt = (cnt = 0, action) => {
  // if (action.type === 'plus') {
  //   return cnt + 1;
  // } else if (action.type === 'minus') {
  //   return cnt - 1;
  // } else return cnt;
  switch (action.type) {
    case 'plus':
      return cnt + 1;
    // break;
    case 'minus':
      return cnt - 1;
    // break;
    default:
      return cnt;
  }
};

const cntStore = createStore(setCnt);
const PLUS = 'plus',
  MINUS = 'minus';
// cntStore.dispatch({ type: '0' });

// let cnt = 0;
// // num.innerText = cnt;
const onChange = () => {
  // console.log('Changed to', cntStore.getState());
  num.innerText = cntStore.getState();
};
onChange();
cntStore.subscribe(onChange);
// const setText = () => {
//   num.innerText = cnt;
// };

// setText();

// plus.addEventListener('click', () => {
//   cnt += 1;
//   setText();
// });
plus.addEventListener('click', () => {
  cntStore.dispatch({ type: PLUS });
});

// minus.addEventListener('click', () => {
//   cnt -= 1;
//   setText();
// });
minus.addEventListener('click', () => {
  cntStore.dispatch({ type: MINUS });
});
