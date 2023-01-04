import { createSlice } from "@reduxjs/toolkit";

const initState = {
  todos_ar: [
    {
      name: "go ot work",
      time: "09:00",
      id: 1,
    },
    {
      name: "go ot lunch",
      time: "12:00",
      id: 2,
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initState,
  reducers: {},
});

export default todoSlice.reducer;
