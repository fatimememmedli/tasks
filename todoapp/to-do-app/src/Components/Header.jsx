import React from "react";

function Header({ value, setValue, todos, setTodos }) {
  console.log(todos);
  return (
    <div>
      <input
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          setTodos([...todos, value]);
        }}
      >
        add
      </button>
    </div>
  );
}

export default Header;
