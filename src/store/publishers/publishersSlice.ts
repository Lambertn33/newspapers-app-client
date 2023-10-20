import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IPublisherInputs } from "../../interfaces/IPublisherInputs";
import {
  getPublishers,
  addPublisher,
  editPublisher,
  deletePublisher,
} from "../../api/api";

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
  async (data: IPublisherInputs, thunkAPI) => {
    try {
      return await addPublisher(data);
    } catch (error) {
      throw error;
    }
  }
);

export const updatePublisher = createAsyncThunk(
  "publishers/edit",
  async (data: IPublisherInputs, thunkAPI) => {
    try {
      return await editPublisher(data);
    } catch (error) {
      throw error;
    }
  }
);

export const removePublisher = createAsyncThunk(
  "publishers/delete",
  async (id: number, thunkAPI) => {
    try {
      return await deletePublisher(id);
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

    erasePublisher(state, action: PayloadAction<{ id: number }>) {
      state.publishers = state.publishers.filter(
        (publisher) => publisher.id !== action.payload.id
      );
    },

    changePublisher(
      state,
      action: PayloadAction<{ id: number; names: string; joinedDate: Date }>
    ) {
      const { id, names, joinedDate } = action.payload;
      const publishers = [...state.publishers];
      const publisherIndex = publishers.findIndex((p) => p.id === id);
      publishers[publisherIndex].joinedDate = joinedDate;
      publishers[publisherIndex].names = names;
      state.publishers = publishers;
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
      })
      .addCase(removePublisher.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updatePublisher.fulfilled, (state, action) => {
        state.status = "succeeded";
      });
  },
});

export const publishersActions = publishersSlice.actions;

export default publishersSlice.reducer;
