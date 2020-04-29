import { ActionType } from './ActionType';

export type FAS = {
  type: ActionType;
  payload?: unknown;
  error?: boolean;
  meta?: unknown;
};
