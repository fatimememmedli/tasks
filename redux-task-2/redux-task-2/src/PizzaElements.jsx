import React from "react";
import slicee from "./redux/slices/Slice";
import { useDispatch, useSelector } from "react-redux";

function PizzaElements() {
  const elements = useSelector((state) => state.elements.elements);

  return (
    <div>
      <ul>
        {elements &&
          elements.map((elem, i) => {
            return <li key={i}>{elem}</li>;
          })}
      </ul>
    </div>
  );
}

export default PizzaElements;
