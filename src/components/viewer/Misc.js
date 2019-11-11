import React from 'react';

const Misc = ({ jsonFile }) => {
  const { crawler } = jsonFile;
  return (
    <div className='misc'>
      <h3>Misc</h3>
      <p>id: {crawler.id}</p>
      <p>version: {crawler['crawl-e'].version}</p>
      <p>
        is_booking_link_capable:{' '}
        {crawler.is_booking_link_capable ? 'true' : 'false'}
      </p>
    </div>
  );
};

export default Misc;
