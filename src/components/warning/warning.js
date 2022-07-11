import React from "react";

import "./warning.css";

function Warning() {
  return (
    <div className="Warning">
      <h2> No location found </h2>
      <p>Try informing city/town and state/country</p>
      <p> Ex: Tokyo, Japan </p>
    </div>
  );
}

export default Warning;