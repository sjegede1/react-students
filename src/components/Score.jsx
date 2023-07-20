import React from "react";

function Score({ score }) {
  return (
    <li>
      <span>Score: {score.score}</span>{" "}
      <span>
        <i>{score.date}</i>
      </span>
    </li>
  );
}

export default Score;
