import React from "react";
// import Moment from 'react-moment';

const ShowtimesNew = ({ jsonFile }) => {
  const { showtimes } = jsonFile;
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
  const groupByTitle = groupBy("movie_title");
  let filteredShowtimes = [];
  filteredShowtimes.push(groupByTitle(showtimes));
  uniqueShowtimes.map(title => {
    console.log(filteredShowtimes[0][title]);
  });

  return (
    <div>
      <h2>Showtimes </h2>
      {uniqueShowtimes.map(title => (
        <div>
          <h3>{title}</h3>
          {filteredShowtimes[0][title].map(start => (
            <p>{start.start_at}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShowtimesNew;
