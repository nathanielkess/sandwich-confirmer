import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from './../components/Button';
import { onIngredientsRequest } from './../../state/ingredients/ingredients.actions';
import { onCheckIfSandwich } from './../../state/ingredients/ingredients.actions';

export const SandwichMachine = connect(
  (state: any) => ({
    ingredients: state.sandwichMachine.ingredients, 
    isSandwich: state.sandwichMachine.isSandwich
  }), 
  {
    requestIngredients: onIngredientsRequest,
    checkSandwich: onCheckIfSandwich
  },
  )(({ requestIngredients, checkSandwich, ingredients, isSandwich }) => (
    <div>
      <Button onPress={requestIngredients} value={'Get Ingredients'} />
      <Button onPress={checkSandwich} value={'Check if sandwich'} />
      <p>
        {ingredients[0] ? ingredients[0].name : ''}
      </p>
      <h1>{isSandwich ? 'IS SANDWICH!' : 'IS NO SANDWICH!'} </h1>
    </div>
  ));