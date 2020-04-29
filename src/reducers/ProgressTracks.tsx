import { MarkProgress } from '../actions/MarkProgress';
import { ActionType } from '../actions/ActionType';
import { ProgressTrackModel } from '../models/ProgressTrackModel';
import produce from 'immer';
import { fromRecipes } from '../utils/Helper';

type ProgressTracksState = ProgressTrackModel[];

const initialState: ProgressTracksState = [
  {
    title: 'Recover lost sword of sharpness +1',
    level: {
      value: 'Epic',
      step: 0.5
    },
    min: 0,
    max: 10,
    current: 5
  }
];

const clamp = (target: number, min: number, max: number) => Math.max(min, Math.min(max, target));

const markProgress = (draft: ProgressTracksState, action: MarkProgress) => {
  const track = draft[action.payload.id];
  const unclamped = track.current + action.payload.times * track.level.step;
  track.current = clamp(unclamped, track.min, track.max);
};

export const progressTracks = produce(
  fromRecipes({
    [ActionType.MARK_PROGRESS]: markProgress
  }),
  initialState
);
