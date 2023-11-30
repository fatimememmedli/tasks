import { configureStore } from "@reduxjs/toolkit";
import elements from "./slices/Slice";
export const store = configureStore({
  reducer: {
    elements: elements,
  },
});
