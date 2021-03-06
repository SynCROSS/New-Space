import React, { useCallback } from 'react';
// import { connect } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/react-redux';
import {
  useSelector,
  useDispatch,
} from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/react-redux';
// import { bindActionCreators } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux';
import Counter from '../components/Counter';
import { increase as inc, decrease as dec } from '../modules/counter';

const CounterContainer = () => {
  // const CounterContainer = ({ number, inc, dec }) => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onInc = useCallback(() => dispatch(inc()), [dispatch]);
  const onDec = useCallback(() => dispatch(dec()), [dispatch]);
  return (
    <Counter
      number={number}
      onInc={onInc}
      onDec={onDec}
      // onInc={() => dispatch(inc())}
      // onDec={() => dispatch(dec())}
    />
  );
};

// const mapStateToProps = state => {
//   return {
//     number: state.counter.number,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     inc: () => {
//       // console.log('increase');
//       dispatch(inc());
//     },
//     dec: () => {
//       // console.log('decrease');
//       dispatch(dec());
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default CounterContainer;

// ver 1.0
// export default connect(
//   state => {
//     return {
//       number: state.counter.number,
//     };
//   },
//   dispatch => {
//     return {
//       inc: () => dispatch(inc()),
//       dec: () => dispatch(dec()),
//     };
//   }
// )(CounterContainer);

// ver 2.0
// export default connect(
//   state => {
//     return {
//       number: state.counter.number,
//     };
//   },
//   dispatch =>
//     bindActionCreators(
//       {
//         inc: () => dispatch(inc()),
//         dec: () => dispatch(dec()),
//       },
//       dispatch
//     )
// )(CounterContainer);
// ver 3.0
// export default connect(
//   state => {
//     return {
//       number: state.counter.number,
//     };
//   },
//   //이렇게 해도 bindActionCreators 작업을 대신 해줌.
//   {
//     inc: () => dispatch(inc()),
//     dec: () => dispatch(dec()),
//   }
// )(CounterContainer);
