import React from "react";
import Score from "./Score";

function Student({ student }) {
  return (
    <div className="student">
      <div className="student-info">
        <h2>{student.name}</h2>
        <p>{student.bio}</p>
      </div>

      <ul className="scores">
        {student.scores.map((score, index) => {
          return <Score score={score} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default Student;
