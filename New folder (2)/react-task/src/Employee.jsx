import React from "react";
import { employee } from "./employee.js";
function Employee() {
  {
    employee.reduce(function (acc, number) {
      //   let constTotal = acc + number.solary;
      //   console.log(constTotal);
      console.log(number.solary);
      //   return acc + number.solary;
      console.log(acc + number.solary);
    }, 0);
  }
  return (
    <>
      <ul>
        {employee
          .sort((a, b) => a.name.localeCompare - b.name.localeCompare)
          .map((elem) => {
            return <li key={elem.id}>{elem.name}</li>;
          })}
      </ul>
      {/* <span>{constTotal}</span> */}
    </>
  );
}

export default Employee;
