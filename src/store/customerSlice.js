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
  reducers:{
    removeCustomer:(state,action)=>{
      state.items = state.items.filter((item)=> item.id !== action.payload);
    },
    updateCustomer: (state, action) => {
      const updated = action.payload;
      const index = state.items.findIndex((item) => item.id === updated.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...updated };
      } else {
        state.items.push(updated);
      }
    }
  },
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
export const {removeCustomer,updateCustomer} =costumerSlice.actions;
export default costumerSlice.reducer;