import { createStore } from 'C:/../Users/kuuha/AppData/Roaming/npm/node_modules/redux';

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const ul = document.querySelector('ul');

// const ADD_TODO = 'add';
// const DELETE_TODO = 'delete';

// const ADDtodo = text => {
//   return { type: ADD_TODO, text };
// };
// const DELtodo = ID => {
//   return { type: DELETE_TODO, ID };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         {
//           text: action.text,
//           id: Date.now(),
//         },
//         ...state,
//       ];
//     case DELETE_TODO:
//       return state.filter(ToDo => ToDo.id !== action.id);
//     default:
//       return state;
//   }
// };

// const ToDoStore = createStore(reducer);
// ToDoStore.subscribe(() => console.log(ToDoStore.getState()));

// Date.prototype.format = function (f) {
//   if (!this.valueOf()) return ' ';
//   const weekKorName = [
//     '일요일',
//     '월요일',
//     '화요일',
//     '수요일',
//     '목요일',
//     '금요일',
//     '토요일',
//   ];
//   const weekKorShortName = ['일', '월', '화', '수', '목', '금', '토'];
//   const weekEngName = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//   ];
//   const weekEngShortName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   const d = this;
//   var h;
//   return f.replace(/(yyyy|yy|MM|dd|KS|KL|ES|EL|HH|hh|mm|ss|a\/p)/gi, function (
//     $1
//   ) {
//     switch ($1) {
//       case 'yyyy':
//         return d.getFullYear(); // 년 (4자리)
//       case 'yy':
//         return (d.getFullYear() % 1000).zf(2); // 년 (2자리)
//       case 'MM':
//         return (d.getMonth() + 1).zf(2); // 월 (2자리)
//       case 'dd':
//         return d.getDate().zf(2); // 일 (2자리)
//       case 'KS':
//         return weekKorShortName[d.getDay()]; // 요일 (짧은 한글)
//       case 'KL':
//         return weekKorName[d.getDay()]; // 요일 (긴 한글)
//       case 'ES':
//         return weekEngShortName[d.getDay()]; // 요일 (짧은 영어)
//       case 'EL':
//         return weekEngName[d.getDay()]; // 요일 (긴 영어)
//       case 'HH':
//         return d.getHours().zf(2); // 시간 (24시간 기준, 2자리)
//       case 'hh':
//         return ((h = d.getHours() % 12) ? h : 12).zf(2); // 시간 (12시간 기준, 2자리)
//       case 'mm':
//         return d.getMinutes().zf(2); // 분 (2자리)
//       case 'ss':
//         return d.getSeconds().zf(2); // 초 (2자리)
//       case 'a/p':
//         return d.getHours() < 12 ? '오전' : '오후'; // 오전/오후 구분
//       default:
//         return $1;
//     }
//   });
// };
// String.prototype.string = function (len) {
//   let s = '',
//     i = 0;
//   while (i++ < len) {
//     s += this;
//   }
//   return s;
// };
// String.prototype.zf = function (len) {
//   return '0'.string(len - this.length) + this;
// };
// Number.prototype.zf = function (len) {
//   return this.toString().zf(len);
// };

// // const date = new Date().format('yyyy-MM-dd a/p hh:mm');
// const date1 = new Date().format('a/p hh:mm');
// const date2 = new Date().format('yyyy-MM-dd');

// const createToDo = text => {
//   ToDoStore.dispatch(ADDtodo(text));
//   // const li = document.createElement('li');
//   // li.innerText = ToDo;
//   // ul.appendChild(li);
// };

// const deleteToDo = e => {
//   const ID = parseInt(e.target.parentNode.parentNode.id);
//   ToDoStore.dispatch(DELtodo(ID));
// };

// const paintToDo = () => {
//   const ToDoS = ToDoStore.getState();
//   ul.innerHTML = '';
//   ToDoS.forEach(ToDo => {
//     const li = document.createElement('li');
//     const div = document.createElement('div');
//     const btn = document.createElement('button');
//     const font = document.createElement('font');
//     // if (Math.floor(Date.now / 86400000) !== Math.floor(ToDo.id / 86400000)) {
//     //   font.innerText = date2 + date1;
//     // }
//     font.innerText = date2 + '\n' + date1;
//     btn.innerText = '❌';
//     btn.addEventListener('click', deleteToDo);
//     li.id = ToDo.id;
//     if (ToDo.text === '' || null) {
//       alert("it's empty value!");
//       return;
//     } else {
//       li.innerText = ToDo.text;
//       div.appendChild(font);
//       div.appendChild(btn);
//       li.appendChild(div);
//       ul.appendChild(li);
//     }
//   });
// };

// ToDoStore.subscribe(paintToDo);

// const onSubmit = e => {
//   e.preventDefault();
//   const ToDo = input.value;
//   input.value = '';
//   createToDo(ToDo);
// };

// form.addEventListener('submit', onSubmit);
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addToDo = text => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach(toDo => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = '❌';
    btn.addEventListener('click', dispatchDeleteToDo);
    li.id = toDo.id;
    if (toDo.text === '' || null) {
      alert("It's Empty!");
      return;
    } else {
      li.innerText = toDo.text;
      li.appendChild(btn);
      ul.appendChild(li);
    }
  });
};

store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  dispatchAddToDo(toDo);
};

form.addEventListener('submit', onSubmit);
