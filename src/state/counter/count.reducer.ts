import { OnIncrement } from './counter.interfaces';
import { OnDecrement } from './counter.interfaces';
import { CounterTypes } from './counter.types';

export const onIncrement = (isUp: boolean): OnIncrement => ({
  type: CounterTypes.INCREMENT,
  payload: { isUp }
});

export const onDecrement = (isUp: boolean): OnDecrement => ({
  type: CounterTypes.DECREMENT,
  payload: { isUp }
});


type HandledActions = OnIncrement | OnDecrement;

export const count = (state: number = 0, action: HandledActions): number => {
  switch (action.type) {
    case CounterTypes.INCREMENT:
      return (action.payload) ? state + 1 : state - 1;
    case CounterTypes.DECREMENT:
      return (action.payload) ? state - 1 : state + 1;
    default: 
      return state;
  }
};
