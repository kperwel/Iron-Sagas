import * as React from 'react';
import { Event } from './../components/Event';
import { useSelector } from 'react-redux';
import { EventModel } from './../models/EventModel';

export default () => {
  const events: EventModel[] = useSelector(state => state.events);
  return (
    <div>
      {events.map(event => (
        <Event {...event} />
      ))}
    </div>
  );
};
