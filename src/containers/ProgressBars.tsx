import React from "react";
import ProgressBar from "./../components/ProgressBar";
import { connect } from "react-redux";

const ProgressBarsContainer = ({ progressBars, deltaAction }) => (
  <div>
    {JSON.stringify(progressBars)}
    {progressBars.map((progressBar, index) => (
      <ProgressBar {...progressBar} id={index} deltaAction={deltaAction} />
    ))}
  </div>
);

const deltaAction = (id, step) => ({
  type: "PROGRESS_DELTA",
  id,
  step
});

const mapStateToProps = state => ({ progressBars: state.progressBars });

const mapDispatchToActions = dispatch => ({
  deltaAction: (id, step) => dispatch(deltaAction(id, step))
});

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(ProgressBarsContainer);
