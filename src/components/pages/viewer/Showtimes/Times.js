import React, { Fragment } from 'react';
import moment from 'moment';
import Time from './Time';
import Attributes from './Attributes';

const Times = ({ filteredShowtimes, title, i }) => {
  let day = moment()
    .add(i, 'days')
    .format('YYYY-MM-DD');
  return (
    <Fragment>
      {filteredShowtimes[0][title].map(
        s =>
          day === s.start_at.split('T')[0] &&
          (s.booking_link ? (
            <li className='single-time' key={s.start_at}>
              <a href={s.booking_link}>
                <Time s={s} />
              </a>
              <Attributes s={s} />
            </li>
          ) : (
            <li className='single-time' key={s.start_at}>
              <p>
                <Time s={s} />
              </p>
              <Attributes s={s} />
            </li>
          ))
      )}
    </Fragment>
  );
};

export default Times;
