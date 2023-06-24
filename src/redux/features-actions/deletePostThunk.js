import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deletePost = createAsyncThunk("deletePost", async (thunkAPI) => {
  try {
    const response = await axios.delete(
      `https://dev.codeleap.co.uk/careers/${thunkAPI}/`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
});
