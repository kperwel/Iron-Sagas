import { FAS } from './FluxStandardAction';
import { ActionType } from './ActionType';

type MarkProgressPayload = {
  id: number;
  times: number;
};

export type MarkProgress = FAS & {
  payload: MarkProgressPayload;
};

export const markProgress: (p: MarkProgressPayload) => MarkProgress = (payload) => ({
  type: ActionType.MARK_PROGRESS,
  payload
});
