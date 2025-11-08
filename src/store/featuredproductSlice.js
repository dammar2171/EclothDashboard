import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFeaturedProducts = createAsyncThunk(
  'products/fetchFeaturedProducts',
  async () => {
    const response = await axios.get('/api/product');
    return response.data;
  }
);

const featuredproductSlice = createSlice({
name: 'newproducts',
    initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
    extraReducers: builder => {
      builder
        .addCase(fetchFeaturedProducts.pending, state => {
          state.status = 'loading';
        })
        .addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;
        })
        .addCase(fetchFeaturedProducts.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
})

export default featuredproductSlice.reducer;