import { ActionsObservable } from 'redux-observable';

import { IngredientsType } from './ingredients.types';
import { onIngredientsReceipt, onSandwichResultReceipt } from './ingredients.actions';
import { fetchIngredients, calculateSandwich } from './ingredients.service';
import { OnIngredientsRequest } from './ingredients.interfaces';

export const getIngredientsEpic = (action$: ActionsObservable<OnIngredientsRequest>)  =>
  action$.ofType(IngredientsType.GET_INGREDIENTS)
   .switchMap(() => fetchIngredients().map(onIngredientsReceipt));

export const checkIfSandwichEpic = (action$: ActionsObservable<any>) => 
  action$.ofType(IngredientsType.CHECK_IF_SANDWICH)
   .switchMap(() => calculateSandwich().map(onSandwichResultReceipt));
