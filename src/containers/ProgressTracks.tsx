import React from "react";
import ProgressTrack from "./../components/ProgressTrack";
import { connect } from "react-redux";
import { ProgressTrackModel } from "../models/ProgressTrackModel";
import { UpdateProgressTrack } from "../actions/UpdateProgressTrack";
import { ActionType } from "../actions/ActionType";

type Props = {
  progressTracks: ProgressTrackModel[];
  emitUpdateProgressTrack: (
    step: number,
    id: number,
    track: ProgressTrackModel
  ) => () => void;
};

type Connector = (state?: any, dispatch?: any) => Props;

const ProgressTracksContainer = (props: Props) => (
  <div>
    {props.progressTracks.map((progressTrack, index) => (
      <ProgressTrack
        id={index}
        track={progressTrack}
        increment={props.emitUpdateProgressTrack(
          progressTrack.level.step,
          index,
          progressTrack
        )}
        decrement={props.emitUpdateProgressTrack(
          -progressTrack.level.step,
          index,
          progressTrack
        )}
      />
    ))}
  </div>
);

const mapStateToProps = (state: any) => ({
  progressTracks: state.progressTracks
});

const mapDispatchToActions = (dispatch: any) => ({
  emitUpdateProgressTrack: (
    step: number,
    id: number,
    track: ProgressTrackModel
  ) => () => {
    const action: UpdateProgressTrack = {
      type: ActionType.UPDATE_PROGRESS_TRACK,
      payload: {
        id: id,
        updatedTrack: {
          ...track,
          current: Math.max(
            track.min,
            Math.min(track.max, track.current + step)
          )
        }
      }
    };
    dispatch(action);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(ProgressTracksContainer);
