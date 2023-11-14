import React, { useState } from "react";

function Counter() {
  let [dnumber, decreasee] = useState(0);
  let [inumber, increasee] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          increasee(inumber--);
          console.log(inumber--);
        }}
      >
        decrease
      </button>
      <span decreasee={decreasee} increasee={increasee}>
        0
      </span>
      <button
        onClick={() => {
          decreasee(dnumber++);
          console.log(dnumber++);
        }}
      >
        increase
      </button>
    </div>
  );
}

export default Counter;
