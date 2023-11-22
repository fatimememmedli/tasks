import { useState } from "react";
import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  let { data, error } = useFetch(
    "https://6556137684b36e3a431ef611.mockapi.io/usernameProducts/products"
  );
  console.log(data);
  return (
    <>
      {data.map((elem, i) => {
        return <li key={i}>{elem.name}</li>;
      })}
    </>
  );
}

export default App;
