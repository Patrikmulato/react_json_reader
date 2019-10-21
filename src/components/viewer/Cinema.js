import React from 'react';

const Cinema = jsonFile => {
  const { cinema } = jsonFile.jsonFile;
  return (
    <div className='cinemas'>
      <h3>Cinema infos</h3>
      <p>name: {cinema.name}</p>
      <p>address: {cinema.address}</p>
      <p>
        website:
        <a id='push' href={cinema.website}>
          {cinema.website}
        </a>
      </p>
      <p>phone: {cinema.phone}</p>
      <p>email: {cinema.email}</p>
      <p>lat: {cinema.lat}</p>
      <p>lon: {cinema.lon}</p>
    </div>
  );
};

export default Cinema;
