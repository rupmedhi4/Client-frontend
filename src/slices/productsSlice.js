import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiAgent } from '../apiAgent';
import axios from 'axios';


export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(apiAgent.getProducts, {
        withCredentials: true,
      });
      return res.data.products;
    } catch (error) {
      console.error("Error fetching products:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


const productSlice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    error: null,
    allCreateProducts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allCreateProducts = action.payload; 
        console.log("Products fetched:", action.payload);
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
