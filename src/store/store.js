import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice.js'
import productReducer from '../slices/productsSlice.js'
import cartReducer from '../slices/cartSlice.js'
import checkOutReducer from '../slices/checkOutSlice.js'

export const store = configureStore({
  reducer: {
    auth:authReducer,
    product:productReducer,
    cart:cartReducer,
    checkOut:checkOutReducer,
  },
})