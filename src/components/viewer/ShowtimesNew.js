import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

const date = moment().format('YYYY-MM-DD');
console.log(date);

const ShowtimesNew = ({ jsonFile }) => {
  const { showtimes } = jsonFile;
  // Get unique titles
  const uniqueShowtimes = [
    ...new Set(showtimes.map(showtime => showtime.movie_title))
  ];
  // Group by movie title
  const groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});
  const groupByTitle = groupBy('movie_title');
  // Make a new object with grouped titles
  let filteredShowtimes = [];
  filteredShowtimes.push(groupByTitle(showtimes));
  return (
    <div>
      <h2>Showtimes </h2>
      {uniqueShowtimes.map((title, i) => (
        <div key={i}>
          <h3>{title}</h3>
          {Array(7)
            .fill()
            .map((_, i) => (
              <div key={i}>
                <Moment add={{ days: i }} format='YYYY-MM-DD' key={i}>
                  {date}
                </Moment>
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
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ShowtimesNew;
