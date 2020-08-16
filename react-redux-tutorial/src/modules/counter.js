import {
  createAction,
  handleAction,
} from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux-actions';

const INC = 'counter/INC';
const DEC = 'counter/DEC';

export const increase = createAction(INC);
export const decrease = createAction(DEC);

// export const increase = () => {
//   return { type: INC };
// };
// export const decrease = () => {
//   return { type: DEC };
// };

const initialState = {
  number: 0,
};

// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case INC:
//       return {
//         number: state.number + 1,
//       };
//     case DEC:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// };

const counter = handleAction(
  {
    [INC]: (state, action) => ({ number: state.number + 1 }),
    [DEC]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);
export default counter;
