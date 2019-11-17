import React from 'react';
import Moment from 'react-moment';

const Time = ({ s }) => {
  return (
    <Moment format='HH:mm' key={s.start_at}>
      {s.start_at}
    </Moment>
  );
};

export default Time;
