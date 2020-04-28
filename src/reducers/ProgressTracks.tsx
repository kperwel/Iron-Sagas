import { UpdateProgressTrack } from "../actions/UpdateProgressTrack";
import { atIndex } from "../utils/Functional";
import { ActionType } from "../actions/ActionType";
import { FAS } from "../actions/FluxStandardAction";
import { ProgressTrackModel } from "../models/ProgressTrackModel";

type ProgressTracksState = ProgressTrackModel[];

type Handler<A extends FAS> = (
  state: ProgressTracksState,
  action: A
) => ProgressTracksState;

const initialState: ProgressTracksState = [
  {
    title: "Recover lost sword of sharpness +1",
    level: {
      value: "Epic",
      step: 0.5
    },
    min: 0,
    max: 10,
    current: 5
  }
];

const addProgressTrack = (state: ProgressTracksState, action: any) => [
  ...state,
  action.newBar
];

const updateProgressTrack: Handler<UpdateProgressTrack> = (state, action) =>
  atIndex(state, action.payload.id, _ => action.payload.updatedTrack);

const handlers: Map<ActionType, Handler<FAS>> = new Map([
  [ActionType.UPDATE_PROGRESS_TRACK, updateProgressTrack],
  [ActionType.ADD_PROGRESS_TRACK, addProgressTrack]
]);

export const progressTracks = (state: ProgressTracksState, action: FAS) => {
  if (state === undefined) {
    return initialState;
  }
  const handler = handlers.get(action.type);
  return handler !== undefined ? handler(state, action) : state;
};
