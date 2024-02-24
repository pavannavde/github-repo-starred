
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async ({page}) => {
    const response = await axios.get(`https://api.github.com/search/repositories?q=created:>2023-12-21&sort=stars&order=desc&page=${page}`);
    return response.data.items;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    loading: false,
    error: null,
    currentPage: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, ...action.payload];
        state.error = null;
        state.currentPage = state.currentPage + 1; // Increment the current page number
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
