import { combineReducers } from 'redux';
import { progressTracks } from './ProgressTracks';
import { events } from './Events';

export default combineReducers({
  progressTracks,
  events
});
