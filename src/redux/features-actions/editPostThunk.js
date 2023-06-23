import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://dev.codeleap.co.uk/careers/";

export const editPost = createAsyncThunk("editPost", async (thunkAPI) => {
  try {
    const response = await axios.patch(URL, thunkAPI);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});
