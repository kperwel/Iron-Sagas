import * as React from 'react';
import * as Material from '@material-ui/core';

type Props = {
  publishEvent: (text: string) => void;
};

const EventWriter = (props: Props) => {
  const ref = React.createRef<any>();
  return (
    <div>
      <Material.Input inputRef={ref} />
      <Material.Button
        onClick={() => {
          props.publishEvent(ref.current.value);
          ref.current.value = '';
        }}
      >
        Send
      </Material.Button>
    </div>
  );
};
export { EventWriter };
