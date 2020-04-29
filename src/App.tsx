import * as React from 'react';
import './App.css';
import ProgressTracksContainer from './containers/ProgressTracks';
import EventsContainer from './containers/Events';
import EventWriterContainer from './containers/EventWriter';
import { Character } from './components/Character';
import { newBaseCharacter } from './models/CharacterModel';

export default function App() {
  return (
    <div className="App">
      <EventsContainer />
      <EventWriterContainer />
      <ProgressTracksContainer />
      <Character {...newBaseCharacter('Janne Ahonen')} />
    </div>
  );
}
