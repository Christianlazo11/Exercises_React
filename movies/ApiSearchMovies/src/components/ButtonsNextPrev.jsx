import React from "react";

const ButtonsNextPrev = ({ numberPage, setNumberPage, maxPage }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center gap-5 mb-5">
      <button
        className="btn btn-danger"
        onClick={() => {
          if (numberPage > 1) {
            setNumberPage(numberPage - 1);
          }
        }}
      >
        Prev
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          if (numberPage < maxPage) {
            setNumberPage(numberPage + 1);
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default ButtonsNextPrev;
