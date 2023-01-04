import { createSlice } from "@reduxjs/toolkit";

const initState = {
  todos_ar: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initState,
  reducers: {
    addNewItem: (state, actions) => {
      state.todos_ar.push(actions.payload.todoItem);
    },
  },
});

export const { addNewItem } = todoSlice.actions;

export default todoSlice.reducer;
