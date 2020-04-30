import { FAS } from './FluxStandardAction';
import { ActionType } from './ActionType';

type TriggerMovePayload = {
  moveName: string;
};

export type TriggerMove = FAS & {
  payload: TriggerMovePayload;
};

export const triggerMove: (payload: TriggerMovePayload) => TriggerMove = (payload) => ({
  type: ActionType.TRIGGER_MOVE,
  payload
});
