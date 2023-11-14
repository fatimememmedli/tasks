import React from "react";

function Hello({ name, age, surname, hobbies }) {
  return (
    <div>
      Hello {name} {surname} {age}
      <ul>
        <li>{hobbies}</li>
      </ul>
    </div>
  );
}

export default Hello;
