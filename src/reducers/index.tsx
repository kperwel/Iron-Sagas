import { combineReducers, Reducer } from 'redux';
import { progressTracks, ProgressTracksState } from './ProgressTracks';
import { events, EventsState } from './Events';
import { mainScreens, MainScreenState } from './MainScreens';
import { moves, MovesState } from './Moves';
import { DefaultRootState } from 'react-redux';

declare module 'react-redux' {
  interface DefaultRootState {
    progressTracks: ProgressTracksState;
    events: EventsState;
    mainScreens: MainScreenState;
    moves: MovesState;
  }
}

const reducer: Reducer<DefaultRootState> = combineReducers({
  progressTracks,
  events,
  mainScreens,
  moves
});

export default reducer;
