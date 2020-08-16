import React from 'react';
import CounterContainer from './containers/CounterContainer';
// import Counter from './components/Counter';
import TODOContainer from './containers//TODOContainer';
// import TODO from './components/TODO';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      {/* <Counter number={0} /> */}
      <hr />
      <TODOContainer />
    </div>
  );
}

export default App;
