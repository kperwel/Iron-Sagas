import { EventModel } from '../models/EventModel';
import { FAS } from './FluxStandardAction';

export type Payload = {
  newEvent: EventModel;
};

export type AddEvent = FAS & {
  payload: Payload;
};
