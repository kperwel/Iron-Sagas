import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MoveModel } from '../models/MoveModel';
import * as Material from '@material-ui/core';
import { triggerMove } from '../actions/TriggerMove';

export default () => {
  const moves: MoveModel[] = useSelector(state => state.moves.moves);
  const dispatch = useDispatch();
  return (
    <Material.Card>
      {
        Object.entries(
          moves.reduce(
            (acc: ArrayLike<MoveModel[]>, move: MoveModel) => {
              acc[move.type] = (acc[move.type] || []).concat(move);
              return acc;
            },
            []
          )
        )
          .map((entry) => (
            <Material.Card>
              <Material.CardHeader title={entry[0]} />
              <Material.CardContent>
                {
                  entry[1].map((move) => (
                    <Material.Button
                      variant="outlined"
                      onClick={() => dispatch(triggerMove({
                        moveName: move.name
                      }))}
                    >
                      {move.name}
                    </Material.Button>
                  ))
                }
              </Material.CardContent>
            </Material.Card>
          ))
      }
    </Material.Card>
  );
};
