import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getNewsPapers } from "../../api/api";

export interface NewsPaper {
  id: number;
  image: string;
  creationDate: Date;
  title: string;
  publisher: {
    names: string;
  };
}

interface NewsPapersState {
  newspapers: NewsPaper[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null;
}

const initialState: NewsPapersState = {
  newspapers: [],
  status: 'idle',
  error: null
};

export const fetchNewsPapers = createAsyncThunk(
  "newspapers/fetch",
  async (thunkAPI) => {
    try {
      return await getNewsPapers();
    } catch (error) {
      throw error;
    }
  }
);

export const newspapersSlice = createSlice({
  name: "newspapers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchNewsPapers.pending, (state, action) => {
      state.status = "idle"
    })
    .addCase(fetchNewsPapers.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.newspapers = action.payload;
    })
    .addCase(fetchNewsPapers.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message!
    })
  },
});


export default newspapersSlice.reducer