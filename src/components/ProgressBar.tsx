import React from "react";
import * as Material from "@material-ui/core";
import * as Icons from "@material-ui/icons";

const range = (start, end) =>
  Array.from({ length: end - start }, (v, k) => k + start);

const marks = (min, max) =>
  range(min, max + 1).map(i => ({
    value: i,
    label: i
  }));

export default ({ id, title, level, min, max, current, deltaAction }) => (
  <div className="progressBar">
    <Material.Card>
      <Material.CardHeader title={title} subheader={level.value} />
      <Material.CardActions>
        <Material.IconButton onClick={() => deltaAction(id, -level.step)}>
          <Icons.Remove />
        </Material.IconButton>
        <Material.Slider
          marks={marks(min, max)}
          min={0}
          max={10}
          value={current}
          step={level.step}
        />
        <Material.IconButton onClick={() => deltaAction(id, level.step)}>
          <Icons.Add />
        </Material.IconButton>
      </Material.CardActions>
    </Material.Card>
  </div>
);
