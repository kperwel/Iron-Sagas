import { EventModel } from "../models/EventModel";
import { FAS } from "./FluxStandardAction";
import { ActionType } from "./ActionType";

export type Payload = {
  newEvent: EventModel;
};

export type AddEvent = FAS & {
  type: ActionType.ADD_PROGRESS_TRACK;
  payload: Payload;
};
