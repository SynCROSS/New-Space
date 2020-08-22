import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  createStore,
  applyMiddleware,
} from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux';
import { Provider } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/react-redux';
// import { composeWithDevTools } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux-devtools-extension';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';
// import loggerMiddleware from './lib/loggerMiddleware';
import { createLogger } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux-logger';

const logger = createLogger();
// const store = createStore(rootReducer, composeWithDevTools());
// const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
