import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
export interface Todo {
  id: string;
  title: string;
}
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Todo>({ id: "", title: "" });

  return (
    <>
      <h1>Todo App</h1>
      <AddTodo
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <Todos todos={todos} />
    </>
  );
}

export default App;
