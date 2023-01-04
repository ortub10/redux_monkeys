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

    resetAllItems: (state, actions) => {
      state.todos_ar = [];
    },
    delSingleItem: (state, actions) => {
      state.todos_ar = state.todos_ar.filter(
        (item) => item.id !== actions.payload.delId
      );
    },
  },
});

export const { addNewItem, resetAllItems, delSingleItem } = todoSlice.actions;

export default todoSlice.reducer;
