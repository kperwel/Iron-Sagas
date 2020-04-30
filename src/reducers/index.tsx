import { combineReducers } from 'redux';
import { progressTracks } from './ProgressTracks';
import { events } from './Events';
import { mainScreens } from './MainScreens';
import { moves } from './Moves';

export default combineReducers({
  progressTracks,
  events,
  mainScreens,
  moves
});
