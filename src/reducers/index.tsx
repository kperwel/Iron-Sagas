import { combineReducers } from 'redux';
import { progressTracks } from './ProgressTracks';
import { events } from './Events';
import { mainScreens } from './MainScreens';

export default combineReducers({
  progressTracks,
  events,
  mainScreens
});
