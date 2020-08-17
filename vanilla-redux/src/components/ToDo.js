import React from 'react';
import { connect } from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/react-redux';
import { Link } from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/react-router-dom';
import { del } from '../todoStore';
// import { actionCreators } from '../todoStore';

const ToDo = ({ text, delTODO, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text} </Link>
      <button onClick={delTODO}>
        {/*  style={{ background: 'none', border: 'none', cursor: 'pointer' }}> */}
        {/* <span role="img"> */}❌{/* </span> */}
      </button>
    </li>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  // return{
  delTODO: () => dispatch(del(ownProps.id)),
  // delTODO: () => dispatch(actionCreators.delTODO(ownProps.id)),
  // }
});

export default connect(null, mapDispatchToProps)(ToDo);
