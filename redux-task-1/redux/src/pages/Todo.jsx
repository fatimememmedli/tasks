import React, { useState } from "react";
import TodoHeader from "../components/TodoHeader";
import Todos from "../components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/slices/TodoSlice";
function Todo() {
  return (
    <div>
      <TodoHeader />
      <Todos />
    </div>
  );
}

export default Todo;
