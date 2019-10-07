import React from 'react';

const Misc = output => {
  const { crawler } = output.output;
  return (
    <div>
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
