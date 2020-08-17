import React from 'react';
import { useState } from 'react';
import { connect } from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/react-redux';
import { add } from '../todoStore';
// import { actionCreators } from '../todoStore';
import ToDo from '../components/ToDo';

const Home = ({ toDos, addTODO }) => {
  const [text, setText] = useState('');
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    addTODO(text);
    setText('');
    // addToDo(addTODO(text));
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Write to do"
        />
        <button>
          <b>Add</b>
        </button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
      {/* {JSON.stringify(toDos)} */}
    </>
  );
};

const mapStateToProps = (state, ownProps?) => ({
  // console.log(state, ownProps);
  // return {
  toDos: state,
  // };
});
const mapDispatchToProps = (dispatch, ownProps?) => ({
  // return {
  addTODO: text => {
    // console.log('dispatch');
    dispatch(add(text));
    // dispatch(actionCreators.addTODO(text));
  },
  // };
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
