import React from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "setTodo":
      return {
        ...state,
        todo: action.todo,
      };
      break;
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
      break;
    case "getSearch":
      return {
        ...state,
        search: action.search,
      };
      break;
    default:
      break;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, {
    todo: "",
    todos: [],
    search: "",
  });
  function setTodo(e) {
    dispatch({
      todo: e.target.value,
      type: "setTodo",
    });
  }
  function addTodo() {
    dispatch({
      todo: state.todo,
      type: "addTodo",
    });
  }
  function getSearch(e) {
    dispatch({
      search: e.target.value,
      type: "getSearch",
    });
  }
  let filterTodos = state.todos.filter((elem) => elem.includes(state.search));
  console.log(state);
  return (
    <div>
      <AddTodo
        getSearch={getSearch}
        value={state.todo}
        setTodo={setTodo}
        addTodo={addTodo}
      />
      <Todos setTodo={setTodo} todos={state.todos} />
    </div>
  );
}

export default TodoApp;
