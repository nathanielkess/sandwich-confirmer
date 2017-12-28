import * as React from 'react';
import { ActionCreator } from 'redux';
import { OnIncrement } from '../../state/counter/counter.interfaces';
import { OnIngredientsRequest } from '../../state/ingredients/ingredients.interfaces';
import { OnIngredientsReceipt } from '../../state/ingredients/ingredients.interfaces';
import { OnIngredientSelect } from '../../state/ingredients/ingredients.interfaces';

export const Button: React.SFC<{
  onPress: ActionCreator<OnIncrement | OnIngredientsRequest | OnIngredientsReceipt | OnIngredientSelect | any>,
  value: string,
}> = ({
  onPress,
  value,
}) => {
  return <button onClick={() => onPress(true)}>{value}</button>;
};
