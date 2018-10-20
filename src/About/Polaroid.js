import React from "react";

const Polaroid = ({ src, alt, title }) => (
  <div className="polaroid">
    <div className="polaroid-wrapper" title={title}>
      <img src={src} alt={alt} />
    </div>
  </div>
);

export default Polaroid;
