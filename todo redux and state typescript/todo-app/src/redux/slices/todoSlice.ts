import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  title: string;
}
export interface TodoState {
  todo: Todo;
  todos: Todo[];
}

const initialState: TodoState = {
  todo: { id: "", title: "" },
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    reduxGetTodo: (state, action: PayloadAction<string>) => {
      const obj: Todo = {
        id: uuidv4(),
        title: action.payload,
      };
      state.todo = obj;
    },
    reduxGetTodos: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { reduxGetTodo, reduxGetTodos } = todoSlice.actions;

export default todoSlice.reducer;
