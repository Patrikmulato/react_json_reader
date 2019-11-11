import React from 'react';

const Showtimes = ({ jsonFile }) => {
  const { showtimes } = jsonFile;
  return (
    <div>
      <h2>Showtimes infos</h2>
      {showtimes.map((showtime, i) => (
        <div className='showtimes' key={i}>
          <p>
            title: <span className='title'> {showtime.movie_title}</span>
          </p>
          <p>
            start: <span className='start'>{showtime.start_at}</span>
          </p>
          <p>
            is_3d:{' '}
            <span className='true'>{showtime.is_3d ? 'true' : 'false'}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Showtimes;
