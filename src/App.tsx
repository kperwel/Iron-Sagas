import * as React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import MainScreen from './containers/MainScreen';
import { Character } from './components/Character';
import { newBaseCharacter } from './models/CharacterModel';
import { Drawer, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Face } from '@material-ui/icons';

export default () => {
  const currentScreen = useSelector(state => state.mainScreens.currentScreen);
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(!isOpen)}>
            <Face />
          </IconButton>
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
