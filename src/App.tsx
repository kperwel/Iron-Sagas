import React from "react";
import "./App.css";
import ProgressTracksContainer from "./containers/ProgressTracks";
import EventsContainer from "./containers/Events";
import EventWriterContainer from "./containers/EventWriter";

export default function App() {
  return (
    <div className="App">
      <EventsContainer />
      <EventWriterContainer />
      <ProgressTracksContainer />
    </div>
  );
}
