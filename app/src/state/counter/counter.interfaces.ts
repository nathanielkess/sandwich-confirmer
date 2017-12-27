import { Action } from 'redux';
import { CounterTypes } from './counter.types';

export interface OnIncrement extends Action {
  type: CounterTypes.INCREMENT;
  payload: {
    isUp: Boolean,
  };
}

export interface OnDecrement extends Action {
  type: CounterTypes.DECREMENT;
  payload: {
    isUp: Boolean,
  };
}