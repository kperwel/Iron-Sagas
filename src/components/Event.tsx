import React from "react";
import * as Material from "@material-ui/core";
import { EventModel, EventType } from "./../models/EventModel";

const Event = (event: EventModel) => (
  <Material.Card>
    <Material.CardHeader subheader={EventType[event.type.toString()]} />
    <Material.CardContent>{event.content}</Material.CardContent>
  </Material.Card>
);

export { Event };
