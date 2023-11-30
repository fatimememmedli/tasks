import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
function Todos() {
  const todoss = useSelector((state) => state.todo.todos);
  console.log(todoss);
  return (
    <div>
      <ul>
        {todoss &&
          todoss.map((elem) => {
            return (
              <li key={elem.id}>
                {elem.title} <Button />{" "}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Todos;
