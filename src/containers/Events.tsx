import * as React from 'react';
import { Event } from './../components/Event';
import { connect } from 'react-redux';
import { EventModel } from './../models/EventModel';

type Props = {
  events: EventModel[];
};

const EventsContainer = (props: Props) => (
  <div>
    {props.events.map(event => (
      <Event {...event} />
    ))}
  </div>
);

function mapStateToProps(state: any) {
  const props: Props = { events: state.events };
  return props;
}

export default connect(
  mapStateToProps,
  {}
)(EventsContainer);
