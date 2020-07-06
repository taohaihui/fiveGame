
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import cacheData from '../middleware/cacheData';
import games from '../reducers';

const loggerMiddleware = createLogger();

export default function configStore(initState) {
  const middleware = [thunkMiddleware, cacheData];

  if (process.env.NODE_ENV === 'development') {
    middleware.push(loggerMiddleware);
  }

  const store = createStore(games, initState, applyMiddleware(...middleware));

  return store;
}