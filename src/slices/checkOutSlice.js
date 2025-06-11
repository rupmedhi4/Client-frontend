
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
            return res.data
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

const checkOutSlice = createSlice({
    name: 'checkOutSlice',
    initialState: {
        selectedAddress:"",
        confirmDelivery:false,
        orderProduct : null,
        isAddressFormOpen: false,
        totalOrderQuantity:1,
        loading: false,
        error: null
    },
    reducers: { 
        setSelectedAddress: (state,action) => {
            state.selectedAddress = action.payload            
        },
        setConfirmDelivery: (state) => {
            state.confirmDelivery = true            
        },
        setIsAddressFormOpen: (state) => {
            state.isAddressFormOpen = !state.isAddressFormOpen;
        },
        setOrderProduct: (state,action) =>{
            const {orderedProduct,quantity}=action.payload
            state.orderProduct = orderedProduct,
            state.totalOrderQuantity = quantity
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

    }

});

export const {setSelectedAddress, setConfirmDelivery, setIsAddressFormOpen,setOrderProduct } = checkOutSlice.actions;
export default checkOutSlice.reducer;
