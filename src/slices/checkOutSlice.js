
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiAgent } from '../apiAgent';
import { toast } from 'react-toastify';


export const addAddress = createAsyncThunk(
    'auth/addAddress',
    async (address, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${apiAgent.setAddress}`, address, {
                withCredentials: true
            });
            console.log(res);

            return res.data
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);
export const placedOrder = createAsyncThunk(
    'auth/placedOrder',
    async ({ orderDetails, id }, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${apiAgent.createOrder}/${id}`, orderDetails, {
                withCredentials: true
            });
            console.log(res);

            return res
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

const checkOutSlice = createSlice({
    name: 'checkOutSlice',
    initialState: {
        selectedAddress: "",
        confirmDelivery: false,
        orderProduct: null,
        isAddressFormOpen: false,
        totalOrderQuantity: 1,
        paymentOption: false,
        loading: false,
        error: null
    },
    reducers: {
        setSelectedAddress: (state, action) => {
            state.selectedAddress = action.payload
        },
        setConfirmDelivery: (state) => {
            state.confirmDelivery = !state.confirmDelivery
        },
        setIsAddressFormOpen: (state) => {
            state.isAddressFormOpen = !state.isAddressFormOpen;
        },
        setPaymentOption: (state) => {
            state.paymentOption = !state.paymentOption
        },
        setOrderProduct: (state, action) => {
            const { orderedProduct, quantity } = action.payload
            state.orderProduct = orderedProduct,
                state.totalOrderQuantity = quantity
        },
        setClearOrderData: (state) => {
            state.orderProduct = null,
            state.totalOrderQuantity = 0,
            state.confirmDelivery=!state.confirmDelivery,
            state.paymentOption = !state.paymentOption

        }
    },

    extraReducers: (builder) => {
        builder

            //addAddress
            .addCase(addAddress.pending, (state) => {
                state.loading = true
            })
            .addCase(addAddress.fulfilled, (state, action) => {
                state.loading = false,
                    toast.success("Address add successfully")

            })
            .addCase(addAddress.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error("Error in add Address")
            })
            //placedOrder
            .addCase(placedOrder.pending, (state) => {
                state.loading = true
            })
            .addCase(placedOrder.fulfilled, (state, action) => {
                state.loading = false,
                    toast.success("Order placed successfully")

            })
            .addCase(placedOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error("Error in placed Order ")
            })

    }

});

export const { setClearOrderData, setSelectedAddress, setConfirmDelivery, setIsAddressFormOpen, setOrderProduct, setPaymentOption } = checkOutSlice.actions;
export default checkOutSlice.reducer;
