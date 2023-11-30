import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  elements: [],
  glutenFree: false,
  ing: ["pepperoni", "anchovies", "olives"],
};
export const slicee = createSlice({
  name: "elements",
  initialState,
  reducers: {
    addElement: (state, action) => {
      if (
        state.ing.find((elem) => elem == action.payload) &&
        !state.elements.find((element) => element.title == action.payload)
      ) {
        let obj = {
          id: uuidv4(),
          title: action.payload,
        };
        state.elements.push(obj);
      } else if (
        state.elements.find((element) => element.title == action.payload)
      ) {
        alert("element var");
      } else if (!state.ing.find((elem) => elem == action.payload)) {
        alert("bele ingredient yoxdur");
      }
    },
    gluten: (state) => {
      return { ...state, glutenFree: !state.glutenFree };
    },
    deletee: (state, action) => {
      console.log(action);
      state.elements = state.elements.filter(
        (elem) => elem.id != action.payload
      );
    },
    cook: (state, action) => {
      let obj = {};
      obj.name = action.payload;
      console.log(obj);
    },
  },
});
export const { addElement, gluten, deletee, cook } = slicee.actions;
export default slicee.reducer;
