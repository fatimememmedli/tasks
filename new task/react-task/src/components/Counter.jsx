import React from "react";
import useCounter from "../hooks/useCounter";

function Counter() {
  let { count, increase, decrease } = useCounter(0);
  return (
    <div>
      <h1>useCounter Hook</h1>
      <button onClick={increase}>+</button>
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default Counter;
