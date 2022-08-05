import React, { useState } from "react";

const Input = ({ value, setValue, setAction, setMsg, msg }) => {
  return (
    <input
      type="number"
      className="form-control"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        setAction();
        setMsg(msg);
      }}
    />
  );
};

export default Input;
