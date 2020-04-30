import { ActionType } from '../actions/ActionType';
import produce from 'immer';
import { fromRecipes } from '../utils/Helper';
import { MoveModel, MoveType } from '../models/MoveModel';
import { TriggerMove } from '../actions/TriggerMove';

type MovesState = {
  currentMove?: MoveModel<any>;
  moves: MoveModel<any>[]
};

const triggerMove = (draft: MovesState, action: TriggerMove) => {
  draft.currentMove = draft.moves.filter(move => move.name === action.payload.moveName)[0];
};

const initialState: MovesState = ({
  currentMove: undefined, 
  moves: [
    {
      type: MoveType.ADVENTURE,
      name: 'Face Danger',
      params: {}
    }
  ]
});

export const moves = produce(
  fromRecipes<MovesState>({
    [ActionType.TRIGGER_MOVE]: triggerMove,
  }),  
  initialState
);  
