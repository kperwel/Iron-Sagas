import { EventModel, EventType } from "./../models/EventModel";
import { AddEvent } from "../actions/AddEvent";
import { ActionType } from "../actions/ActionType";
import { FAS } from "../actions/FluxStandardAction";

export type EventsState = EventModel[];

type Handler<A> = (state: EventsState, action: A) => EventsState;

const initialState: EventsState = [
  {
    type: EventType.Story,
    content: "Long time ago, in a galaxy far, far away..."
  },
  {
    type: EventType.Dialogue,
    content: "Have you ever heard about the tragedy of Darth Plagueis the Wise?"
  }
];

const addEvent: Handler<AddEvent> = (state, action) => [
  ...state,
  action.payload.newEvent
];

const handlers: Map<ActionType, Handler<FAS>> = new Map([
  [ActionType.ADD_EVENT, addEvent]
]);

export const events = (state: EventsState, action: FAS) => {
  if (state === undefined) {
    return initialState;
  }
  const handler = handlers.get(action.type);
  return handler !== undefined ? handler(state, action) : state;
};
