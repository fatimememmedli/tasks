import React from "react";
import { Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./../App";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../redux/store/store";
import { reduxGetTodo, reduxGetTodos } from "../redux/slices/todoSlice";
interface Props {
  todo: Todo;
  todos: Todo[];
  setTodo: Dispatch<SetStateAction<Todo>>;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}
function AddTodo({ todo, setTodo, setTodos, todos }: Props) {
  const dispatch = useDispatch();
  const reduxTodo = useSelector((state: RootState) => state.todo.todo);
  return (
    <div>
      <input
        onChange={(e) => {
          // const target = e.target as Element;
          // const obj: Todo = {
          //   id: uuidv4(),
          //   title: e.target.value,
          // };
          // setTodo(obj);
          dispatch(reduxGetTodo(e.target.value));
        }}
        type="text"
      />
      <button
        onClick={() => {
          // setTodos([...todos, todo]);
          // setTodo({ id: "", title: "" });
          dispatch(reduxGetTodos(reduxTodo));
        }}
      >
        add
      </button>
    </div>
  );
}

export default AddTodo;
