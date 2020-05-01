import * as React from 'react';
import { Event } from './../components/Event';
import { useSelector } from 'react-redux';
import { EventModel } from './../models/EventModel';
import { Box } from '@material-ui/core';

export default () => {
  const events: EventModel[] = useSelector(state => state.events);

  return (
    <Box overflow="auto">
      {events.map(event => (
        <Event {...event} />
      ))}
    </Box>
  );
};
