// import React, { useState } from "react";

const MyLight = ({ value, setValue }) => {
  //   const [light, setLight] = useState(false);

  return (
    <div className="card-container">
      <div className={value ? "card bg-light" : "card bg-gray"}></div>
      <button
        className="button"
        onClick={() => {
          value ? setValue(false) : setValue(true);
        }}
      >
        {value ? "Off" : "On"}
      </button>
    </div>
  );
};

export default MyLight;
