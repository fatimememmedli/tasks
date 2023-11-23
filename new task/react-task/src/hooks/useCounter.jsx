import { useState } from "react";

export default function useCounter(x) {
  let [count, setCount] = useState(x);

  function increase() {
    setCount(++count);
    return count;
  }
  function decrease() {
    setCount(--count);
    return count;
  }

  return {
    count,
    increase,
    decrease,
  };
}
