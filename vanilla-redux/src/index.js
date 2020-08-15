import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { Provider } from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/react-redux';
import todoStore from './todoStore';

ReactDom.render(
  <Provider store={todoStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
