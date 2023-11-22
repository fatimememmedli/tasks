import React from "react";

function Footer({ todos, setTodos }) {
  return (
    <div>
      <ul>
        {todos.map((elem, i) => {
          return <li key={i}>{elem}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;
