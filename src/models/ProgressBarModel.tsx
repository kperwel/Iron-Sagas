type ProgressBarModel = {
  title: string;
  level: {
    value: string;
    step: number;
  };
  min: number;
  max: number;
  current: number;
};

export default ProgressBarModel;
