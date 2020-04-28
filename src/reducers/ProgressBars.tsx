import ProgressBarModel from "./../models/ProgressBarModel.js";

type ProgressBarsState = ProgressBarModel[];
type UnaryOp<T> = (element: T) => T;

const initialState: ProgressBarsState = [
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

const atIndex = (
  state: ProgressBarsState,
  index: number,
  operation: UnaryOp<ProgressBarModel>
) => [
  ...state.slice(0, index),
  operation(state[index]),
  ...state.slice(index + 1)
];

const progressDelta = (state: ProgressBarsState, action: any) =>
  atIndex(state, action.id, progressBar => ({
    ...progressBar,
    current: Math.max(
      progressBar.min,
      Math.min(progressBar.max, progressBar.current + action.step)
    )
  }));

const addProgressBar = (state: ProgressBarsState, action: any) => [
  ...state,
  action.newBar
];

const actions = {
  PROGRESS_DELTA: progressDelta,
  ADD_PROGRESS_BAR: addProgressBar
};

const progressBars = (state: ProgressBarsState, action: any) => {
  if (state === undefined) {
    return initialState;
  }
  return actions[action.type](state, action);
};

export default progressBars;
