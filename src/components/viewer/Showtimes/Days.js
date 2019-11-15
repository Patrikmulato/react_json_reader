import React, { Fragment } from 'react';
import Times from './Times';
import Moment from 'react-moment';
import moment from 'moment';

const date = moment().format('YYYY-MM-DD');

const Days = ({ filteredShowtimes, title }) => {
  return (
    <Fragment>
      {Array(7)
        .fill()
        .map((_, i) => (
          <div key={i}>
            <Moment add={{ days: i }} format='YYYY-MM-DD' key={i}>
              {date}
            </Moment>
            <Times filteredShowtimes={filteredShowtimes} title={title} i={i} />
          </div>
        ))}
    </Fragment>
  );
};

export default Days;
