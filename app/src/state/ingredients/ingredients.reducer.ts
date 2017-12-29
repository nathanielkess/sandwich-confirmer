import { Dispatch } from 'redux';
import { IngredientsType } from './ingredients.types';
import { OnIngredientsRequest, OnCheckSandwich } from './ingredients.interfaces';
import { OnIngredientsReceipt } from './ingredients.interfaces';
import { OnIngredientSelect } from './ingredients.interfaces';
import { IngredientsStore } from './ingredients.interfaces';
import { Ingredient } from './ingredients.interfaces';

const fetchIngredients = () => 
  fetch('http://localhost:4200/ingredients').then(response => response.json());

// const pureSandwich = [1, 8, 10, 19, 26, 27]; 
// const calculateSandwich = () => 
//   fetch('http://localhost:4200/sandwichgenerator', {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(pureSandwich)
//   }).then(response => response.json());

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

export const getIngredients = (): (d: Dispatch<any>) => void => {
  return (dispatch: Dispatch<any>) => {
    dispatch(onIngredientsRequest());
    fetchIngredients().then(
      (results) => dispatch(onIngredientsReceipt(results))
    );
  };
};
  
const initialIngredientState: IngredientsStore = {
    ingredients: [],
    selectedIngredients: []
};

type HandledActions = OnIngredientsReceipt | OnIngredientSelect;

export const sandwichMachine = (state = initialIngredientState, action: HandledActions): IngredientsStore => {
  switch (action.type) {
    case IngredientsType.SET_INGREDIENTS:
      return { 
          ...state, 
          ingredients: action.payload.ingredients
        };
    case IngredientsType.SELECT_INGREDIENT:
      return {
          ...state,
          selectedIngredients: [...state.selectedIngredients, action.payload.ingredient ]
      };
    default: 
      return state;
  }
};
