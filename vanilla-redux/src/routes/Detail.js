import React from 'react';
// import { useParams } from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/react-router-dom';
import { connect } from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/react-redux';
const Detail = ({ toDo }) => {
  //toDos
  // const id = useParams();
  // console.log(id);
  return (
    <>
      <h1>
        {toDo?.text} @ {toDo?.id}
      </h1>
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
};
export default connect(mapStateToProps)(Detail);
