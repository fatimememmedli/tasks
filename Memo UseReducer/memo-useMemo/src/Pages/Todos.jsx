import React from "react";
import TodoItem from "./TodoItem";

function Todos({ todos }) {
  return (
    <div>
      <ul>
        {todos &&
          todos.map((elem, i) => {
            return <TodoItem elem={elem} key={i} />;
          })}
      </ul>
    </div>
  );
}

export default Todos;
