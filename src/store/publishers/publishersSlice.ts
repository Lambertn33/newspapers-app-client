import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPublishers } from "../../api/api";

export interface Publisher {
  id: number;
  names: string;
  joinedDate: Date;
  _count: {
    newsPapers: number;
  };
}

interface PublishersState {
  publishers: Publisher[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PublishersState = {
  publishers: [],
  status: "idle",
  error: null,
};

export const fetchPublishers = createAsyncThunk(
  "publishers/fetch",
  async (thunkAPI) => {
    try {
      return await getPublishers();
    } catch (error) {
      throw error;
    }
  }
);

export const publishersSlice = createSlice({
    name: "publishers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchPublishers.pending, (state, action) => {
        state.status = "idle"
      })
      .addCase(fetchPublishers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.publishers = action.payload;
      })
      .addCase(fetchPublishers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message!
      })
    },
  });
  
  
  export default publishersSlice.reducer
