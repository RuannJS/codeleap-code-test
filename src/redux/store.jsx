import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./features-actions/signupSlice";
import getListReducer from "./features-actions/getListSlice";
import newPostFormReducer from "./features-actions/newPostFormSlice";

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    getlist: getListReducer,
    newpost: newPostFormReducer,
  },
});
