import { ActionType } from '../actions/ActionType';
import produce from 'immer';
import { fromRecipes } from '../utils/Helper';
import { MainScreen } from '../models/MainScreen';
import { SwitchMainScreen } from '../actions/SwitchMainScreen';
import { PublishEvent } from '../actions/PublishEvent';

type MainScreenState = {
  currentScreen: MainScreen;
};

const initialScreen: MainScreenState = { currentScreen: MainScreen.EVENTS_LOG };

const switchMainScreen = (draft: MainScreenState, action: SwitchMainScreen) => {
  draft.currentScreen = action.payload.nextScreen;
};

const publishEvent = (draft: MainScreenState, action: PublishEvent) => {
  draft.currentScreen = MainScreen.EVENTS_LOG;
};

export const mainScreens = produce(
  fromRecipes({
    [ActionType.SWITCH_MAIN_SCREEN]: switchMainScreen,
    [ActionType.PUBLISH_EVENT]: publishEvent,
  }),
  initialScreen
);
