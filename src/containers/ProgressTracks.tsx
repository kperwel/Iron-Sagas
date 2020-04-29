import * as React from 'react';
import ProgressTrack from './../components/ProgressTrack';
import { useDispatch, useSelector } from 'react-redux';
import { ProgressTrackModel } from '../models/ProgressTrackModel';
import { markProgress } from '../actions/MarkProgress';

export default () => {
  const dispatch = useDispatch();
  const progressTracks = useSelector((state: any) => state.progressTracks);
  return (
    <div>
      {progressTracks.map((progressTrack: ProgressTrackModel, index: number) => (
        <ProgressTrack
          id={index}
          track={progressTrack}
          increment={() => dispatch(markProgress({ id: index, times: 1 }))}
          decrement={() => dispatch(markProgress({ id: index, times: -1 }))}
        />
      ))}
    </div>
  );
};