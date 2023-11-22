import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Header
        value={value}
        setValue={setValue}
        todos={todos}
        setTodos={setTodos}
      />
      <Footer todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
