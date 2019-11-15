import React, { Fragment } from 'react';
import Moment from 'react-moment';
import moment from 'moment';

const Times = ({ filteredShowtimes, title, i }) => {
  return (
    <Fragment>
      {filteredShowtimes[0][title].map(s => {
        let day = moment()
          .add(i, 'days')
          .format('YYYY-MM-DD');
        if (day === s.start_at.split('T')[0]) {
          return (
            <Moment format='HH:mm' key={s.start_at}>
              {s.start_at}
            </Moment>
          );
        } else {
          return null;
        }
      })}
    </Fragment>
  );
};

export default Times;
