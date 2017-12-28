import { IngredientsType } from './ingredients.types';
import { OnIngredientsRequest } from './ingredients.interfaces';
import { OnIngredientsReceipt } from './ingredients.interfaces';
import { OnIngredientSelect } from './ingredients.interfaces';
import { IngredientsStore } from './ingredients.interfaces';
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
  
const initialIngredientState: IngredientsStore = {
    ingredients: [],
    selectedIngredients: []
};

type HandledActions = OnIngredientsReceipt | OnIngredientSelect;

export const ingredients = (state = initialIngredientState, action: HandledActions): IngredientsStore => {
  switch (action.type) {
    case IngredientsType.SET_INGREDIENTS:
      return { 
          ...state, 
          ingredients: action.payload.ingredients
        }
    case IngredientsType.SELECT_INGREDIENT:
      return {
          ...state,
          selectedIngredients: [...state.selectedIngredients, action.payload.ingredient ]
      }
    default: 
      return state;
  }
};
