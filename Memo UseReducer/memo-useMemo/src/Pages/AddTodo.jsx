import React from "react";

function AddTodo({ setTodo, addTodo, value, getSearch }) {
  return (
    <div>
      <h3>search</h3>
      <div>
        <input onChange={getSearch} placeholder="search" type="text" />
      </div>

      <div>
        <input value={value} onChange={setTodo} type="text" />
        <button onClick={addTodo}>add</button>
      </div>
    </div>
  );
}

export default AddTodo;
