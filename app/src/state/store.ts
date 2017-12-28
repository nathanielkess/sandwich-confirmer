import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { count } from './counter/count.reducer';
import { ingredientsReducer } from './ingredients/ingredients.reducer';

// import { createLogger } from 'redux-logger';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  count,
  ingredientsReducer
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
