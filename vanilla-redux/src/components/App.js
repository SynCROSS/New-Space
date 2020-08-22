import React from 'react';
import {
  HashRouter,
  Route,
} from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

const App = () => {
  return (
    <HashRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
    </HashRouter>
  );
};
// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1, window.React2);
export default App;
