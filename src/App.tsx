import * as React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import MainScreen from './containers/MainScreen';
import { Character } from './components/Character';
import { newBaseCharacter } from './models/CharacterModel';
import { Drawer, AppBar, Toolbar, Typography, Divider, Button } from '@material-ui/core';
import { Face, ArrowForwardIos, ArrowBackIos } from '@material-ui/icons';

export default () => {
  const currentScreen = useSelector(state => state.mainScreens.currentScreen);
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Button
            startIcon={isOpen && <ArrowBackIos />}
            aria-label="menu"
            onClick={() => setOpen(!isOpen)}
            color="inherit"
            endIcon={!isOpen && (<ArrowForwardIos />)}
            variant="outlined"
          >
            <Face />
          </Button>
          <Divider orientation="vertical" flexItem={true} style={{ margin: '0em 1em' }} />
          <Typography variant="h6">
            {currentScreen.toString()}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <MainScreen />
      <Drawer open={isOpen}>
        <Toolbar />
        <Character {...newBaseCharacter('Janne Ahonen')} />
      </Drawer>
    </div>
  );
};
