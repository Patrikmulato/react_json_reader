import React, { Fragment } from "react";

const Attributes = ({ s }) => {
  if (s.attributes) {
    return (
      <Fragment>
        {" "}
        (
        {s.attributes.map(attr => {
          if (attr.match(/Imax/i)) {
            return (
              <span className="attributes" key={attr}>
                imax
              </span>
            );
          } else if (attr.match(/Atmos/i)) {
            return (
              <span className="attributes" key={attr}>
                atmos
              </span>
            );
          } else if (attr.match(/3d/i)) {
            return (
              <span className="attributes" key={attr}>
                3D
              </span>
            );
          } else {
            return null;
          }
        })}
        )
      </Fragment>
    );
  } else {
    return null;
  }
};

export default Attributes;
