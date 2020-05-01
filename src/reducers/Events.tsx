import { EventModel, EventType } from './../models/EventModel';
import { PublishEvent } from '../actions/PublishEvent';
import { ActionType } from '../actions/ActionType';
import { produce } from 'immer';
import { fromRecipes } from '../utils/Helper';
import { TriggerMove } from '../actions/TriggerMove';

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

const publishEvent = (draft: EventsState, action: PublishEvent) => {
  draft.push({
    type: EventType.Story,
    content: action.payload.text
  });
};

const triggerMove = (draft: EventsState, action: TriggerMove) => {
  draft.push({
    type: EventType.Move,
    content: action.payload.moveName
  });
};

export const events = produce(
  fromRecipes({
    [ActionType.PUBLISH_EVENT]: publishEvent,
    [ActionType.TRIGGER_MOVE]: triggerMove
  }),
  initialState);
