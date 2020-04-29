import * as React from 'react';
import { EventWriter } from './../components/EventWriter';
import { useDispatch } from 'react-redux';
import { publishEvent } from '../actions/PublishEvent';

export default () => {
  const dispatch = useDispatch();
  return (
    <div>
      <EventWriter publishEvent={(text) => dispatch(publishEvent({text}))}/>
    </div>
  );
};
