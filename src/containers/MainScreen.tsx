import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MainScreen } from '../models/MainScreen';
import Events from './Events';
import EventWriter from './EventWriter';
import Moves from './Moves';
import { ButtonGroup, Button, Box, Divider } from '@material-ui/core';
import { switchMainScreen } from './../actions/SwitchMainScreen';

const MainWindow = () => {
    const screen: MainScreen = useSelector((state) => state.mainScreens.currentScreen);
    return (
        <Box>
            {screen === MainScreen.EVENTS_WRITER && (<EventWriter />)}
            {screen === MainScreen.MOVES && (<Moves />)}
            {screen === MainScreen.EVENTS_LOG && (<Events />)}
        </Box>
    );
};

export default () => {
    const dispatch = useDispatch();
    return (
        <Box
            display="flex"
            flexDirection="column"
            flexGrow={1}
            overflow="hidden"
            alignItems="center"
        >
            <Box
                flexGrow={1}
                height={0}
                alignSelf="stretch"
                overflow="auto"
            >
                <MainWindow />
            </Box>
            <Divider style={{ alignSelf: 'stretch' }} />
            <ButtonGroup style={{ padding: '1em' }}>
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
        </Box>
    );
};
