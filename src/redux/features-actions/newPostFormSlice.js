import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  content: "",
};

const newPostFormSlice = createSlice({
  name: "newpost",
  initialState,
  reducers: {
    titleChange: (state, action) => {
      state.title = action.payload;
    },
    contentChange: (state, action) => {
      state.content = action.payload;
    },
  },
});

export default newPostFormSlice.reducer;

export const { titleChange, contentChange } = newPostFormSlice.actions;
