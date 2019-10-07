import React, { Fragment } from 'react';

const Showtimes = output => {
  const { showtimes } = output.output;
  console.log(showtimes);
  return (
    <div>
      <h3>Showtimes infos</h3>
      {showtimes.map((showtime, i) => (
        <Fragment key={i}>
          <p>title: {showtime.movie_title}</p>
          <p>start: {showtime.start_at}</p>
          <p>is_3d: {showtime.is_3d ? 'true' : 'false'}</p>
        </Fragment>
      ))}
    </div>
  );
};

export default Showtimes;
