import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNewProducts = createAsyncThunk(
  'products/fetchNewProducts',
  async () => {
    const response = await axios.get('/api/newProducts');
    return response.data;
  }
);

const newproductSlice = createSlice({
  name: 'newproducts',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNewProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchNewProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchNewProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default newproductSlice.reducer;