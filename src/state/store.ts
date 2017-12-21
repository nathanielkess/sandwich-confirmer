import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { count } from './counter/count.reducer';
// import { createLogger } from 'redux-logger';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  count,
});

// const logger = createLogger({ collapsed: true });

export const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(logger)
  ),
);
