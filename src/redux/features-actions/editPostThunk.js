import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const editPost = createAsyncThunk("editPost", async (thunkAPI) => {
  const { id, title, content } = thunkAPI;

  try {
    const response = await axios.patch(
      `https://dev.codeleap.co.uk/careers/${id}/`,
      {
        title: title,
        content: content,
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
});
