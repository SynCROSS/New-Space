import React from 'react';

const Counter = ({ onInc, onDec, num }) => {
  return (
    <>
      <h1>{num}</h1>
      <button onClick={onInc}>➕</button>
      <button onClick={onDec}>➖</button>
    </>
  );
};

export default Counter;
