import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from './../components/Button';
import { getIngredients } from './../../state/ingredients/ingredients.reducer';
import { checkIfSandwich } from './../../state/ingredients/ingredients.reducer';

export const SandwichMachine = connect(
  (state: any) => ({
    ingredients: state.sandwichMachine.ingredients, 
    isSandwich: state.sandwichMachine.isSandwich
  }), 
  {
    requestIngredients: getIngredients,
    checkSandwich: checkIfSandwich
  },
  )(({ requestIngredients, checkSandwich, ingredients, isSandwich }) => (
    <div>
      <Button onPress={requestIngredients} value={'Get Ingredients'} />
      <Button onPress={checkSandwich} value={'Check if sandwich'} />
      <p>
        { ingredients[0] ? ingredients[0].name : '' }
      </p>
      <h1>{ isSandwich ? 'IS SANDWICH!' : 'IS NO SANDWICH!' } </h1>
    </div>
  ));