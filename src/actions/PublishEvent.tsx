import { FAS } from './FluxStandardAction';
import { ActionType } from './ActionType';

type PublishEventPayload = {
  text: string;
};

export type PublishEvent = FAS & {
  payload: PublishEventPayload;
};

export const publishEvent: (payload: PublishEventPayload) => PublishEvent = (payload) => ({
  type: ActionType.PUBLISH_EVENT,
  payload
});
