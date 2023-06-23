import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  content: "",
  counter: 0,
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
    clearInput: (state) => {
      state.content = "";
      state.title = "";
    },
    increaseCounter: (state) => {
      state.counter += 1;
    },
    decreaseCounter: (state) => {
      state.counter -= 1;
    },
  },
});

export default newPostFormSlice.reducer;

export const {
  titleChange,
  contentChange,
  clearInput,
  increaseCounter,
  decreaseCounter,
} = newPostFormSlice.actions;
