import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from './../components/Button';
import { getIngredients } from './../../state/ingredients/ingredients.reducer';
import { onCheckIfSandwich } from './../../state/ingredients/ingredients.reducer';

export const SandwichMachine = connect(
  null, 
  {
    requestIngredients: getIngredients,
    checkSandwich: onCheckIfSandwich
  },
  )(({ requestIngredients, checkSandwich }) => (
    <div>
      <Button onPress={requestIngredients} value={'Get Ingredients'} />
      <Button onPress={checkSandwich} value={'Check if sandwich'} />
    </div>
  ));