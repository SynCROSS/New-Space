const INC = 'counter/INC';
const DEC = 'counter/DEC';

export const increase = () => {
  return { type: INC };
};
export const decrease = () => {
  return { type: DEC };
};

const initialState = {
  number: 0,
};
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {
        number: state.number + 1,
      };
    case DEC:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};
export default counter;
