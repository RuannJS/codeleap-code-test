import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./features-actions/signupSlice";

export const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});
