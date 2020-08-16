import React, { useCallback } from 'react';
// import { connect } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/react-redux';
import {
  useSelector,
  useDispatch,
} from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/react-redux';
import { change, insert, toggle, remove } from '../modules/todo';
import TODO from '../components/TODO';
import useActions from '../lib/useActions';

const TODOContainer = () => {
  const { input, toDos } = useSelector(state => {
    return {
      input: state.todo.input,
      toDos: state.todo.toDos,
    };
  });
  const [onChange, onInsert, onToggle, onRemove] = useActions(
    [change, insert, toggle, remove],
    []
  );
  // const dispatch = useDispatch();
  // const onChange = useCallback(input => dispatch(change(input)), [dispatch]);
  // const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
  // const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
  // const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

  // const TODOContainer = ({ input, toDos, change, insert, toggle, remove }) => {
  return (
    <TODO
      input={input}
      toDos={toDos}
      onChange={onChange}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

// const mapStateToProps = state => ({
//   input: state.todo.input,
//   toDos: state.todo.toDos,
// });

export default React.memo(TODOContainer);
// export default connect(mapStateToProps, {
//   change,
//   insert,
//   toggle,
//   remove,
// })(TODOContainer);
