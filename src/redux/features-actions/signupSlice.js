import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginUsername: "",
  isLogged: false,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    usernameChange: (state, action) => {
      state.loginUsername = action.payload;
    },
    userLogin: (state) => {
      state.isLogged = !state.isLogged;
    },
    userLogout: (state) => {
      state.loginUsername = "";
      state.isLogged = !state.isLogged;
    },
  },
});

export default signupSlice.reducer;

export const { usernameChange, userLogin, userLogout } = signupSlice.actions;
