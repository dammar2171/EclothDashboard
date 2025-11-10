import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCostumers = createAsyncThunk(
  'costumer/fetchCostumers',
  async () => {
    const response = await axios.get('/api/costumer');
    return response.data;
  }
);
const costumerSlice = createSlice({
  name:"costumers",
  initialState:{
    items: [],
    status: 'idle',
    error: null,
  },
  reducers:{},
  extraReducers: builder => {
      builder
        .addCase(fetchCostumers.pending, state => {
          state.status = 'loading';
        })
        .addCase(fetchCostumers.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;
        })
        .addCase(fetchCostumers.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
      }
})
export default costumerSlice.reducer;