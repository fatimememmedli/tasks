import React from "react";
import { useReducer } from "react";
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "GET_VALUE":
      return {
        todo: action.value,
        todos: state.todos,
      };
      break;
    case "ADD_TODO":
      return {
        todo: "",
        todos: [...state.todos, action.value],
      };
      break;
    case "DELETE_ITEM":
      return {
        todo: state.todo,
        todos: action.todos,
      };
      break;
    case "DELETE_ALL":
      return {
        todo: state.todo,
        todos: action.todos,
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
  });

  return (
    <div>
      <h1>To Do App</h1>
      <input
        value={state.todo}
        onChange={(e) => {
          dispatch({
            type: "GET_VALUE",
            value: e.target.value,
          });
        }}
        type="text"
      />
      <button
        onClick={() => {
          dispatch({
            type: "ADD_TODO",
            value: state.todo,
          });
        }}
      >
        add
      </button>
      <button
        onClick={(e) => {
          dispatch({
            type: "DELETE_ALL",
            todos: [],
          });
        }}
      >
        delete all
      </button>

      {state.todos.map((elem, i) => {
        return (
          <li key={i}>
            {elem}{" "}
            <button
              name={i}
              onClick={(e) => {
                // console.log(state.todos.indexOf(elem));
                if (
                  state.todos.indexOf(elem) == e.target.getAttribute("name")
                ) {
                  let arr;
                  arr = state.todos.filter(
                    (element) =>
                      state.todos.indexOf(element) !=
                      e.target.getAttribute("name")
                  );
                  dispatch({
                    type: "DELETE_ITEM",
                    todos: arr,
                  });
                }
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default TodoApp;
