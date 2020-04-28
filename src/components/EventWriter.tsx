import React from "react";
import * as Material from "@material-ui/core";
import { EventModel, EventType } from "./../models/EventModel";

type Props = {
  text: string;
  addEvent: (event: EventModel) => void;
};

const EventWriter = (props: Props) => {
  const ref = React.createRef();
  return (
    <div>
      <Material.Input inputRef={ref} />
      <Material.Button
        onClick={() => {
          console.log(ref.current);
          props.addEvent({
            type: EventType.Story,
            content: ref.current.value
          });
          ref.current.value = "";
        }}
      >
        Send
      </Material.Button>
    </div>
  );
};
export { EventWriter };
