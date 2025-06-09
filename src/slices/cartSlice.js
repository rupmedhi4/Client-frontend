import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiAgent } from '../apiAgent';
import axios from 'axios';


export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${apiAgent.addToCart}/${id}`,{}, {
        withCredentials: true,
      });
      return res;
    } catch (error) {
      console.error("Error fetching products:", error);
      return rejectWithValue(error);
    }
  }
);

export const fetchAddToCart = createAsyncThunk(
  'cart/fetchAddToCart',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(apiAgent.getAddToCart, {
        withCredentials: true,
      });
      return res.data.data;
    } catch (error) {
      console.error("Error fetching add to cart data:", error);
      return rejectWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    loading: false,
    error: null,
    cartData:[],
    isCartOpen: false
  },
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
     
      //addToCart
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartData=action.payload.data.user.addToCart
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //fetchAddToCart
      .addCase(fetchAddToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddToCart.fulfilled, (state, action) => {
        state.loading = false;        
        state.cartData=action.payload
      })
      .addCase(fetchAddToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
