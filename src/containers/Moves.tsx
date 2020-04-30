import * as React from 'react';
import { useSelector } from 'react-redux';
import { MoveModel } from '../models/MoveModel';
import { Moves } from '../components/Moves';

export default () => {
  const moves: MoveModel<any>[] = useSelector(state => state.moves.moves);
  return (
      <Moves moves={moves} />
  );
};
