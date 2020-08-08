const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
// const num = document.getElementById('num');
const num = document.querySelector('div');

let cnt = 0;
// num.innerText = cnt;

const setText = () => {
  num.innerText = cnt;
};

setText();

plus.addEventListener('click', () => {
  cnt += 1;
  setText();
});

minus.addEventListener('click', () => {
  cnt -= 1;
  setText();
});
