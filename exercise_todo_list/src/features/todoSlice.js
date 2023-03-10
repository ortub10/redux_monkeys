import { createSlice } from "@reduxjs/toolkit";

const KEY_LOCAL = "todo_local";

const initState = localStorage[KEY_LOCAL]
  ? JSON.parse(localStorage[KEY_LOCAL])
  : {
      todos_ar: [],
    };

const todoSlice = createSlice({
  name: "todos",
  initialState: initState,
  reducers: {
    addNewItem: (state, actions) => {
      state.todos_ar.push(actions.payload.todoItem);
      saveToLocal(state);
    },

    resetAllItems: (state, actions) => {
      state.todos_ar = [];
      saveToLocal(state);
    },
    delSingleItem: (state, actions) => {
      state.todos_ar = state.todos_ar.filter(
        (item) => item.id !== actions.payload.delId
      );
      saveToLocal(state);
    },
  },
});

const saveToLocal = (state) => {
  localStorage.setItem(KEY_LOCAL, JSON.stringify(state));
};

export const { addNewItem, resetAllItems, delSingleItem } = todoSlice.actions;

export default todoSlice.reducer;
