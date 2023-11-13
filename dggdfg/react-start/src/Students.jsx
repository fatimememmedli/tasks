import React from "react";
import { students } from "./students.js";
function Students() {
  return (
    <div>
      {students.map((elem, i) => {
        return (
          <ul>
            {" "}
            <li key={i}>{elem.id}</li>
            <li key={i}>{elem.name}</li>
            <li key={i}>{elem.age}</li>
          </ul>
        );
      })}
      <div>
        {students.reduce(function (acc, number) {
          return acc + number;
        }, 0)}
      </div>
    </div>
  );
}

export default Students;
