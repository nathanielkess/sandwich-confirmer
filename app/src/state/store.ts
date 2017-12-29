import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { sandwichMachine } from './ingredients/ingredients.reducer';

// import { createLogger } from 'redux-logger';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  sandwichMachine
});

const middleware = [
  thunk,
  logger
];

// const logger = createLogger({ collapsed: true });

export const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(...middleware)
  ),
);
