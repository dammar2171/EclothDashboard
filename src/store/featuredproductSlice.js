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
  reducers: {
    addProduct:(state,action)=>{
        const {product,source}=action.payload;
       if (source === 'featuredproducts') {
        state.items.push(product);
       }
    },
    removeProduct:(state,action)=>{
       const {id,source}=action.payload;
       if(source === "featuredproducts"){
         state.items = state.items.filter((item)=>item.id !== id);
       }
    },
    updateProduct: (state, action) => {
      const { product, source } = action.payload;
      if (source === 'featuredproducts') {
        const index = state.items.findIndex((item) => item.id === product.id);
        if (index !== -1) {
          state.items[index] = product;
        }
      }
    },
  },
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