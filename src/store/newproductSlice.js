import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNewProducts = createAsyncThunk(
  'products/fetchFeaturedProducts',
  async () => {
    const response = await axios.get("http://localhost:5000/product/fetchProducts",{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data.data;
  }
);

const newproductSlice = createSlice({
  name: 'newproducts',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      const { product, source } = action.payload;
      if (source === 'newproducts') {
        state.items.push(product);
      }
    },
    removeProduct: (state, action) => {
      const { id, source } = action.payload;
      if (source === 'newproducts') {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    updateProduct: (state, action) => {
      const { product, source } = action.payload;
      if (source === 'newproducts') {
        const index = state.items.findIndex((item) => item.id === product.id);
        if (index !== -1) {
          state.items[index] = product;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.filter(items => items.type === "NewArrival");
      })
      .addCase(fetchNewProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addProduct, removeProduct, updateProduct } = newproductSlice.actions;
export default newproductSlice.reducer;