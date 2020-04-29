import { EventModel } from '../models/EventModel';
import { FAS } from './FluxStandardAction';
import { ActionType } from './ActionType';

export type AddEvent = FAS & {
  payload: EventModel;
};

export const addEvent: (e: EventModel) => AddEvent = (event: EventModel) => ({
  type: ActionType.ADD_EVENT,
  payload: event
});
