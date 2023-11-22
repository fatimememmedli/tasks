import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case "increase":
      return {
        count: action.count,
      };
      break;
    case "decrease":
      return {
        count: action.count,
      };
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  console.log(state);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            count: (state.count += 1),
            type: "increase",
          });
        }}
      >
        Increase
      </button>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({
            count: (state.count -= 1),
            type: "decrease",
          });
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;
