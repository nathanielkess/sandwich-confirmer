import * as React from 'react';
import {  ActionCreator } from 'redux';
import { OnIncrement } from '../../state/counter/counter.interfaces';
import { OnDecrement } from '../../state/counter/counter.interfaces';

export const Button: React.SFC<{
  onPress: ActionCreator<OnIncrement | OnDecrement>,
  value: string,
}> = ({
  onPress,
  value,
}) => {
  return <button onClick={() => onPress(true)}>{value}</button>;
};
