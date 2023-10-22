import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getNewsPapers, addNewsPaper, deleteNewsPaper } from "../../api/api";
import { INewsPaperInputs } from "../../interfaces/INewsPaperInputs";

export interface INewsPaper {
  id: number;
  image: string;
  creationDate: Date;
  title: string;
  publisher: {
    names: string;
  };
}

interface INewsPapersState {
  newspapers: INewsPaper[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: INewsPapersState = {
  newspapers: [],
  status: "idle",
  error: null,
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

export const createNewsPaper = createAsyncThunk(
  "newspapers/add",
  async (data: INewsPaperInputs, thunkAPI) => {
    try {
      return await addNewsPaper(data);
    } catch (error) {
      throw error;
    }
  }
);

export const removeNewsPaper = createAsyncThunk(
  "newspapers/delete",
  async (id: number, thunkAPI) => {
    try {
      return await deleteNewsPaper(id);
    } catch (error) {
      throw error;
    }
  }
);

export const newspapersSlice = createSlice({
  name: "newspapers",
  initialState,
  reducers: {
    appendNewsPaper(state, action: PayloadAction<INewsPaper>) {
      state.newspapers.push(action.payload);
    },
    eraseNewsPaper(state, action: PayloadAction<{ id: number }>) {
      state.newspapers = state.newspapers.filter(
        (newspaper) => newspaper.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsPapers.pending, (state, action) => {
        state.status = "idle";
      })
      .addCase(fetchNewsPapers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.newspapers = action.payload;
      })
      .addCase(fetchNewsPapers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message!;
      })
      .addCase(createNewsPaper.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(removeNewsPaper.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
  },
});

export const newspapersActions = newspapersSlice.actions;

export default newspapersSlice.reducer;
