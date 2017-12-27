import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from './../components/Button';
import { onIncrement } from './../../state/counter/count.reducer';
import { onDecrement } from './../../state/counter/count.reducer';

// export const Counter: React.SFC<{}> = () => {
//   return (
//     <div>
//       <Button />
//     </div>
//   );
// };

export const Counter = connect(
  null, 
  {
    onUp: onIncrement,
    onDown: onDecrement
  },
)(({ onUp, onDown }) => (
  <div>
    <Button onPress={onUp} value={'Go Up'} />
    <Button onPress={onDown} value={'Go Down'} />
  </div>
));
