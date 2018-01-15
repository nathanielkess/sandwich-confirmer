import * as React from 'react';
import { ActionCreator } from 'redux';
// import { OnIngredientsRequest } from '../../state/ingredients/ingredients.interfaces';
// import { OnIngredientsReceipt } from '../../state/ingredients/ingredients.interfaces';
// import { OnIngredientSelect } from '../../state/ingredients/ingredients.interfaces';

export const Button: React.SFC<{
  onPress: ActionCreator<any> // fix typing
  value: string,
}> = ({
  onPress,
  value,
}) => {
  return <button onClick={() => onPress()}>{value}</button>;
};
