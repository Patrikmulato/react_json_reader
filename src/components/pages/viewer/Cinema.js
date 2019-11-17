import React, { Fragment } from 'react';

const Cinema = ({ jsonFile }) => {
  const { cinema } = jsonFile;
  return (
    <div className='cinemas'>
      <h2>Cinema Data's:</h2>
      {/* NAME */}
      <p>
        {cinema.name ? (
          <Fragment>
            <b>name: </b>
            <span>{cinema.name}</span>
          </Fragment>
        ) : (
          <b>
            name: <span className='alert'>*required info*</span>
          </b>
        )}
      </p>
      {/* ADDRESS */}
      <p>
        {cinema.address ? (
          <Fragment>
            <b>address: </b>
            <span>{cinema.address}</span>
          </Fragment>
        ) : (
          <b>
            address: <span className='alert'>*required info*</span>
          </b>
        )}
      </p>
      {/* WEBSITE */}
      {cinema.website ? (
        <p>
          <b>website:</b>
          <a id='push' href={cinema.website}>
            {cinema.website}
          </a>
        </p>
      ) : null}
      {/* PHONE */}
      {cinema.phone ? (
        <p>
          <b>phone:</b>
          <span> {cinema.phone}</span>
        </p>
      ) : null}
      {/* EMAIL */}
      {cinema.email ? (
        <p>
          <b>email:</b>
          <span> {cinema.email}</span>
        </p>
      ) : null}
      {/* LAT */}
      {cinema.lat ? (
        <p>
          <b>lat:</b>
          <span> {cinema.lat}</span>
        </p>
      ) : null}
      {/* LON */}
      {cinema.lon ? (
        <p>
          <b>lon:</b>
          <span> {cinema.lon}</span>
        </p>
      ) : null}
      {/* SLUG */}
      {cinema.slug ? (
        <p>
          <b>slug:</b>
          <span> {cinema.slug}</span>
        </p>
      ) : null}
    </div>
  );
};

export default Cinema;
