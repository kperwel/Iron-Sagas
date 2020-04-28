export type ProgressTrackModel = {
  title: string;
  level: {
    value: string;
    step: number;
  };
  min: number;
  max: number;
  current: number;
};
