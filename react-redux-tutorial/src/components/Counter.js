import React from 'react';

const Counter = ({ number, onInc, onDec }) => {
  return (
    <>
      <h1>{number}</h1>
      <div className="buttonWrap">
        <button onClick={onInc}>➕</button>
        <button onClick={onDec}>➖</button>
      </div>
    </>
  );
};
export default Counter;
