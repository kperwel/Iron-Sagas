import * as React from 'react';
import { EventWriter } from './../components/EventWriter';
import { EventModel } from './../models/EventModel';
import { connect } from 'react-redux';
import { AddEvent } from '../actions/AddEvent';
import { ActionType } from '../actions/ActionType';

type Props = {
  dispatch: React.Dispatch<any>;
};

const EventsWriterContainer = (props: Props) => (
  <div>
    <EventWriter
      addEvent={(event: EventModel) => {
        const action: AddEvent = {
          type: ActionType.ADD_EVENT,
          payload: { newEvent: event }
        };
        props.dispatch(action);
      }}
    />
  </div>
);

export default connect(
  null,
  null
)(EventsWriterContainer);
