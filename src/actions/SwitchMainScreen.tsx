import { FAS } from './FluxStandardAction';
import { ActionType } from './ActionType';
import { MainScreen } from '../models/MainScreen';

type SwitchMainScreenPayload = {
  nextScreen: MainScreen;
};

export type SwitchMainScreen = FAS & {
  payload: SwitchMainScreenPayload;
};

export const switchMainScreen: (payload: SwitchMainScreenPayload) => SwitchMainScreen = (payload) => ({
  type: ActionType.SWITCH_MAIN_SCREEN,
  payload
});
