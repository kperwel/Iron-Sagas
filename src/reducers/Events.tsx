import { EventModel, EventType } from './../models/EventModel';
import { AddEvent } from '../actions/AddEvent';
import { ActionType } from '../actions/ActionType';
import { produce } from 'immer';
import { fromRecipes } from '../utils/Helper';

export type EventsState = EventModel[];

const initialState: EventsState = [
  {
    type: EventType.Story,
    content: 'Long time ago, in a galaxy far, far away...'
  },
  {
    type: EventType.Dialogue,
    content: 'Have you ever heard about the tragedy of Darth Plagueis the Wise?'
  }
];

const addEvent = (draft: EventsState, action: AddEvent) => { draft.push(action.payload); };

export const events = produce(
  fromRecipes({
    [ActionType.ADD_EVENT]: addEvent
  }),
  initialState);
