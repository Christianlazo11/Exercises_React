import React from "react";

function MyCard({ title, list, color }) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <ul>
        {list.map((x) => (
          <li>
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyCard;
