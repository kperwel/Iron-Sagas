import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MainScreen } from '../models/MainScreen';
import Events from './Events';
import EventWriter from './EventWriter';
import { ButtonGroup, Button } from '@material-ui/core';
import { switchMainScreen } from './../actions/SwitchMainScreen';

const MainWindow = () => {
    const screen: MainScreen = useSelector((state) => state.mainScreens.currentScreen);
    switch (screen) {
        case MainScreen.EVENTS_WRITER:
            return (<EventWriter />);
        case MainScreen.MOVES:
            return (<div> Moves placeholder</div>);
        case MainScreen.EVENTS_LOG:
            return (<Events />);
        default:
            return null;
    }
};

export default () => {
    const dispatch = useDispatch();
    return (
        <div>
            <MainWindow />
            <ButtonGroup>
                <Button
                    onClick={() => dispatch(switchMainScreen({ nextScreen: MainScreen.EVENTS_LOG }))}
                >
                    Read
                </Button>
                <Button
                    onClick={() => dispatch(switchMainScreen({ nextScreen: MainScreen.EVENTS_WRITER }))}
                >
                    Write
                </Button>
                <Button
                    onClick={() => dispatch(switchMainScreen({ nextScreen: MainScreen.MOVES }))}
                >
                    Move
                </Button>
            </ButtonGroup>
        </div>
    );
};
