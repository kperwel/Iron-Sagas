import { ProgressTrackModel } from '../models/ProgressTrackModel';
import { FAS } from './FluxStandardAction';

export type Payload = {
  id: number;
  updatedTrack: ProgressTrackModel;
};

export type UpdateProgressTrack = FAS & {
  payload: Payload;
};
