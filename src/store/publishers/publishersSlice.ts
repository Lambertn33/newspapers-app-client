import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PublisherInputs } from "../../interfaces/PublisherInputs";
import { getPublishers, addPublisher } from "../../api/api";

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

export const createPublisher = createAsyncThunk(
  "publishers/add",
  async (data: PublisherInputs, thunkAPI) => {
    try {
      return await addPublisher(data);
    } catch (error) {
      throw error;
    }
  }
);

export const publishersSlice = createSlice({
  name: "publishers",
  initialState,
  reducers: {
    appendPublisher(state, action: PayloadAction<Publisher>) {
      state.publishers.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPublishers.pending, (state, action) => {
        state.status = "idle";
      })
      .addCase(fetchPublishers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.publishers = action.payload;
      })
      .addCase(fetchPublishers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message!;
      })
      .addCase(createPublisher.fulfilled, (state, action) => {
        state.status = "succeeded";
      });
  },
});

export const publishersActions = publishersSlice.actions

export default publishersSlice.reducer;
