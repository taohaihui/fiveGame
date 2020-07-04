import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxGame from './view/Game';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import playGame from './reducers';

let store = createStore(playGame);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxGame />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
