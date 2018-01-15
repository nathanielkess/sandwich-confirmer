import { IngredientsType } from './ingredients.types';
import { OnSandwichResultReceipt } from './ingredients.interfaces';
import { OnIngredientsReceipt } from './ingredients.interfaces';
import { OnIngredientSelect } from './ingredients.interfaces';
import { IngredientsStore } from './ingredients.interfaces';
  
const initialIngredientState: IngredientsStore = {
    ingredients: [],
    selectedIngredients: [],
    isSandwich: false
};

type HandledActions = OnIngredientsReceipt | OnIngredientSelect | OnSandwichResultReceipt;

export const sandwichMachine = (state = initialIngredientState, action: HandledActions): IngredientsStore => {
  switch (action.type) {
    case IngredientsType.SET_INGREDIENTS:
      return { 
          ...state, 
          ingredients: action.payload.ingredients,
          isSandwich: false
        };
    case IngredientsType.SELECT_INGREDIENT:
      return {
          ...state,
          selectedIngredients: [...state.selectedIngredients, action.payload.ingredient ]
      };

    case IngredientsType.SET_SANDWICH_RESULT:
      return {
        ...state,
        isSandwich: action.payload.isSandwich
      };
    default: 
      return state;
  }
};
