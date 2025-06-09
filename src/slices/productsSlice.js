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

export const getSingleProduct = createAsyncThunk(
  'product/getSingleProduct',
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${apiAgent.getSingleProduct}/${id}`,{
          withCredentials: true,
        }
      )
      console.log(res);
      
      return res.data.products;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)



const productSlice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    error: null,
    allCreateProducts: [],
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allCreateProducts = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //getSingleProduct
      .addCase(getSingleProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
     
  },
});

export const { setCurrentProductId } = productSlice.actions;
export default productSlice.reducer;
