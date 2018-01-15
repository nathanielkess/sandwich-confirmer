import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { sandwichMachine } from './ingredients/ingredients.reducer';
import { getIngredientsEpic, checkIfSandwichEpic } from './ingredients/ingredients.epics';

// import { createLogger } from 'redux-logger';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  sandwichMachine
});

const rootEpic = combineEpics(
  getIngredientsEpic,
  checkIfSandwichEpic
);

const middleware = [
  logger,
  createEpicMiddleware(rootEpic)
];

// const logger = createLogger({ collapsed: true });

export const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(...middleware)
  ),
);
