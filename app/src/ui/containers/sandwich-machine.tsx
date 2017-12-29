import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from './../components/Button';
import { getIngredients } from './../../state/ingredients/ingredients.reducer';
import { onCheckIfSandwich } from './../../state/ingredients/ingredients.reducer';

export const SandwichMachine = connect(
  (state: any) => ({
    ingredients : state.sandwichMachine.ingredients, 
  }), 
  {
    requestIngredients: getIngredients,
    checkSandwich: onCheckIfSandwich
  },
  )(({ requestIngredients, checkSandwich, ingredients }) => (
    <div>
      <Button onPress={requestIngredients} value={'Get Ingredients'} />
      <Button onPress={checkSandwich} value={'Check if sandwich'} />
      <p>
        <div>{ ingredients[0] ? ingredients[0].name : '' }</div>
      </p>
    </div>
  ));