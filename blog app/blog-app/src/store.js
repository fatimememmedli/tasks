import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import blogReducer from "./Components/BlogSlice";
export const store = configureStore({
  reducer: {
    createBlog: blogReducer,
  },
});
