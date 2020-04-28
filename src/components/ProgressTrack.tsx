import * as React from 'react';
import * as Material from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { ProgressTrackModel } from '../models/ProgressTrackModel';

const range = (start: number, end: number) =>
  Array.from({ length: end - start }, (v, k) => k + start);

const marks = (min: number, max: number) =>
  range(min, max + 1).map(i => ({
    value: i,
    label: i
  }));

type Props = {
  id: number;
  track: ProgressTrackModel;
  increment: () => void;
  decrement: () => void;
};

export default (props: Props) => {
  const track = props.track;
  return (
    <div className="progressBar">
      <Material.Card>
        <Material.CardHeader
          title={track.title}
          subheader={track.level.value}
        />
        <Material.CardActions>
          <Material.IconButton onClick={props.decrement}>
            <Icons.Remove />
          </Material.IconButton>
          <Material.Slider
            marks={marks(track.min, track.max)}
            min={0}
            max={10}
            value={track.current}
            step={track.level.step}
          />
          <Material.IconButton onClick={props.increment}>
            <Icons.Add />
          </Material.IconButton>
        </Material.CardActions>
      </Material.Card>
    </div>
  );
};
