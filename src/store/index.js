
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import playGame from '../reducers';

const loggerMiddleware = createLogger();

export default function configStore(initState) {
  const middleware = [thunkMiddleware];

  if (process.env.NODE_ENV === 'development') {
    middleware.push(loggerMiddleware);
  }

  const store = createStore(playGame, initState, applyMiddleware(...middleware));

  return store;
}