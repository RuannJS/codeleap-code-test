import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getURL = "https://dev.codeleap.co.uk/careers/";

const initialState = {
  list: [],
  isLoading: true,
};

export const getList = createAsyncThunk("getList", async (thunkAPI) => {
  try {
    const resp = await axios(getURL);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("There was an error!");
  }
});

const getListSlice = createSlice({
  name: "getlist",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    });
    builder.addCase(getList.rejected, (state, action) => {
      console.log(action);
      state.isLoading = false;
    });
  },
});

export default getListSlice.reducer;
