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
          <ul key={i} className='showtimes-field'>
            <li>
              <h5>
                <Moment add={{ days: i }} format='YYYY-MM-DD' key={i}>
                  {date}
                </Moment>
              </h5>
            </li>
            <Times filteredShowtimes={filteredShowtimes} title={title} i={i} />
          </ul>
        ))}
    </Fragment>
  );
};

export default Days;
