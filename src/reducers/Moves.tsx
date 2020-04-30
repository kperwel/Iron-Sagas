import { ActionType } from '../actions/ActionType';
import produce from 'immer';
import { fromRecipes } from '../utils/Helper';
import { MoveModel, MoveType } from '../models/MoveModel';
import { TriggerMove } from '../actions/TriggerMove';

export type MovesState = {
  currentMove?: MoveModel<any>;
  moves: MoveModel<any>[]
};

const triggerMove = (draft: MovesState, action: TriggerMove) => {
  draft.currentMove = draft.moves.filter(move => move.name === action.payload.moveName)[0];
};

const initialState: MovesState = ({
  currentMove: undefined,
  moves: [
    { type: MoveType.ADVENTURE, name: 'Face Danger' },
    { type: MoveType.ADVENTURE, name: 'Secure an Advantage' },
    { type: MoveType.ADVENTURE, name: 'Gather Information' },
    { type: MoveType.ADVENTURE, name: 'Heal' },
    { type: MoveType.ADVENTURE, name: 'Resupply' },
    { type: MoveType.ADVENTURE, name: 'Make Camp' },
    { type: MoveType.ADVENTURE, name: 'Undertake a Journey' },
    { type: MoveType.ADVENTURE, name: 'Reach Your Destination' },
    { type: MoveType.RELATIONSHIP, name: 'Compel' },
    { type: MoveType.RELATIONSHIP, name: 'Sojourn' },
    { type: MoveType.RELATIONSHIP, name: 'Draw the Circle' },
    { type: MoveType.RELATIONSHIP, name: 'Forge a Bond' },
    { type: MoveType.RELATIONSHIP, name: 'Test Your Bond' },
    { type: MoveType.RELATIONSHIP, name: 'Aid Your Ally' },
    { type: MoveType.RELATIONSHIP, name: 'Write Your Epilogue' },
    { type: MoveType.COMBAT, name: 'Enter the Fray' },
    { type: MoveType.COMBAT, name: 'Strike' },
    { type: MoveType.COMBAT, name: 'Clash' },
    { type: MoveType.COMBAT, name: 'Turn the Tide' },
    { type: MoveType.COMBAT, name: 'End the Fight' },
    { type: MoveType.COMBAT, name: 'Battle' },
    { type: MoveType.SUFFER, name: 'Endure Harm' },
    { type: MoveType.SUFFER, name: 'Face Death' },
    { type: MoveType.SUFFER, name: 'Companion Endure Harm' },
    { type: MoveType.SUFFER, name: 'Endure Stress' },
    { type: MoveType.SUFFER, name: 'Face Desolation' },
    { type: MoveType.SUFFER, name: 'Out of Supply' },
    { type: MoveType.SUFFER, name: 'Face a Setback' },
    { type: MoveType.QUEST, name: 'Swear an Iron Vow' },
    { type: MoveType.QUEST, name: 'Reach a Milestone' },
    { type: MoveType.QUEST, name: 'Fulfill Your Vow' },
    { type: MoveType.QUEST, name: 'Forsake Your Vow' },
    { type: MoveType.QUEST, name: 'Advance' },
    { type: MoveType.FATE, name: 'Pay the Price' },
    { type: MoveType.FATE, name: 'Ask the Oracle' }
  ]
});

export const moves = produce(
  fromRecipes<MovesState>({
    [ActionType.TRIGGER_MOVE]: triggerMove,
  }),
  initialState
);  
