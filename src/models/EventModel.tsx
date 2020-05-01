export type EventModel = {
  type: EventType;
  content: string;
};

export enum EventType {
  Story,
  Dialogue,
  Dice,
  StatusChange,
  Move
}
