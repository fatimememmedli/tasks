import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import slicee from "./redux/slices/Slice";
import { addElement, gluten, deletee, cook } from "./redux/slices/Slice";
function Pizza() {
  const [value, setValue] = useState("");
  const elements = useSelector((state) => state.elements);
  let input = useRef();
  const dispatch = useDispatch();
  console.log(elements);
  return (
    <div>
      <h1>Pizza</h1>
      <input ref={input} type="text" />
      <button
        onClick={() => {
          dispatch(addElement(input.current.value));
          input.current.value = "";
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          dispatch(cook(input.current.value));
        }}
      >
        cook
      </button>

      <ul>
        {elements.elements.map((elem, i) => {
          return (
            <li key={i}>
              {elem.title}{" "}
              <button
                onClick={() => {
                  dispatch(deletee(elem.id));
                }}
              >
                delete
              </button>
            </li>
          );
        })}
        {elements.glutenFree ? <h3>Gluten true</h3> : <h3>Gluten false</h3>}
      </ul>

      {/* <button
        onClick={() => {
          let a = "Pepperoni";
          dispatch(addElement(a));
        }}
      >
        Add Pepperoni
      </button>
      <button
        onClick={() => {
          let b = "Anchovies";
          dispatch(addElement(b));
        }}
      >
        Add Anchovies
      </button>
      <button
        onClick={() => {
          let b = "Olives";
          dispatch(addElement(b));
        }}
      >
        Add Olives
      </button> */}
      <button
        onClick={() => {
          dispatch(gluten());
        }}
      >
        Toggle Gluten
      </button>
    </div>
  );
}

export default Pizza;
