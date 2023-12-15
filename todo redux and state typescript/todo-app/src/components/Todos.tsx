import React from "react";
import { Todo } from "./../App";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../redux/store/store";

interface Props {
  todos: Todo[];
}

function Todos({ todos }: Props) {
  const reduxTodos = useSelector((state: RootState) => state.todo.todos);
  return (
    <div>
      <ul>
        {reduxTodos &&
          reduxTodos.map((elem) => {
            return <li key={elem.id}>{elem.title}</li>;
          })}
      </ul>
    </div>
  );
}

export default Todos;
