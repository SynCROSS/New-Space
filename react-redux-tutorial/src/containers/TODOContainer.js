import React from 'react';
import { connect } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/react-redux';
import { change, insert, toggle, remove } from '../modules/todo';
import TODO from '../components/TODO';

const TODOContainer = ({ input, toDos, change, insert, toggle, remove }) => {
  return (
    <TODO
      input={input}
      toDos={toDos}
      onChange={change}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

const mapStateToProps = state => ({
  input: state.todo.input,
  toDos: state.todo.toDos,
});

export default connect(mapStateToProps, {
  change,
  insert,
  toggle,
  remove,
})(TODOContainer);
