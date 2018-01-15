import { Action } from 'redux';
import { IngredientsType } from './ingredients.types';

export interface OnIngredientsRequest extends Action {
  type: IngredientsType.GET_INGREDIENTS;
}

export interface OnIngredientsReceipt extends Action {
  type: IngredientsType.SET_INGREDIENTS;
  payload: {
      ingredients: Ingredient[] 
  }
}

export interface OnIngredientSelect extends Action {
  type: IngredientsType.SELECT_INGREDIENT;
  payload: { 
      ingredient: Ingredient 
  }
}

export interface OnCheckSandwich extends Action {
  type: IngredientsType.CHECK_IF_SANDWICH;
}

export interface OnSandwichResultReceipt extends Action {
  type: IngredientsType.SET_SANDWICH_RESULT;
  payload: { 
    isSandwich: boolean 
  };
}

export interface Ingredient {
  id: number;
  name: string;
  type: string;
}

export interface IngredientsStore {
    ingredients: Ingredient[];
    selectedIngredients: Ingredient[];
    isSandwich: boolean;
}