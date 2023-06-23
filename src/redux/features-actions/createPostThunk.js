import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://dev.codeleap.co.uk/careers/";

export const createPost = createAsyncThunk("createPost", async (thunkAPI) => {
  try {
    const response = await axios.post(URL, thunkAPI);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});
