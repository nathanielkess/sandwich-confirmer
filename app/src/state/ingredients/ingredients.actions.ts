import { IngredientsType } from './ingredients.types';
import { OnIngredientsRequest, OnCheckSandwich, OnSandwichResultReceipt } from './ingredients.interfaces';
import { OnIngredientsReceipt } from './ingredients.interfaces';
import { OnIngredientSelect } from './ingredients.interfaces';
import { Ingredient } from './ingredients.interfaces';

export const onIngredientsRequest = (): OnIngredientsRequest => ({
  type: IngredientsType.GET_INGREDIENTS
});

export const onIngredientsReceipt = (ingredients: Ingredient[]): OnIngredientsReceipt => ({ 
  type: IngredientsType.SET_INGREDIENTS,
  payload: { ingredients }
});

export const onIngredientSelect = (ingredient: Ingredient): OnIngredientSelect => ({
    type: IngredientsType.SELECT_INGREDIENT,
    payload: { ingredient }
});

export const onCheckIfSandwich = (): OnCheckSandwich => ({
  type: IngredientsType.CHECK_IF_SANDWICH
});

export const onSandwichResultReceipt = (isSandwich: boolean): OnSandwichResultReceipt => ({
  type: IngredientsType.SET_SANDWICH_RESULT,
  payload: { isSandwich }
});
