import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/slices/TodoSlice";
function TodoHeader() {
  const todos = useSelector((state) => state.todo.todos);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Todo</h3>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          dispatch(addTodo(value));
        }}
      >
        add
      </button>
    </div>
  );
}

export default TodoHeader;
