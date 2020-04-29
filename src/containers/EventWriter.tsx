import * as React from 'react';
import { EventWriter } from './../components/EventWriter';
import { useDispatch } from 'react-redux';
import { addEvent } from '../actions/AddEvent';
import { EventType } from '../models/EventModel';

export default () => {
  const dispatch = useDispatch();
  return (
    <div>
      <EventWriter
        addEvent={(text) => dispatch(addEvent({
          type: EventType.Story,
          content: text
        }))}
      />
    </div>
  );
};
