import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  isLogged: false,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    usernameChange: (state, action) => {
      state.username = action.payload;
    },
    userLogin: (state) => {
      state.isLogged = !state.isLogged;
    },
    userLogout: (state) => {
      state.username = "";
      state.isLogged = !state.isLogged;
    },
  },
});

export default signupSlice.reducer;

export const { usernameChange, userLogin, userLogout } = signupSlice.actions;
