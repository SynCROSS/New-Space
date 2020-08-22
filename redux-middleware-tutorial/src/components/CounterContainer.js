import React from 'react';
import { connect } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/react-redux';
import { increase, decrease } from '../modules/counter';
import Counter from './Counter';

const CounterContainer = ({ num, increase, decrease }) => {
  return <Counter num={num} onInc={increase} onDec={decrease} />;
};

const mapStateToProps = state => {
  return {
    num: state.counter,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
// export default connect(mapStateToProps, { increase, decrease })(
//   CounterContainer
// );
