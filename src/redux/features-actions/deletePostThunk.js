import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deletePost = createAsyncThunk("deletePost", async (thunkAPI) => {
  try {
    const response = await axios.delete(
      `https://dev.codeleap.co.uk/careers/${thunkAPI}`
    );
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
});
