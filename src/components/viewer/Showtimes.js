import React from 'react';
import Days from './Showtimes/Days';

const Showtimes = ({ jsonFile }) => {
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
          <Days filteredShowtimes={filteredShowtimes} title={title} />
        </div>
      ))}
    </div>
  );
};

export default Showtimes;
