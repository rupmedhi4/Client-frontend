import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { placedOrder, setClearOrderData, setConfirmDelivery, setPaymentOption } from '../../../slices/checkOutSlice';
import { useParams } from 'react-router-dom';

export default function PaymentOption() {
    const {id}=useParams()
    const dispatch = useDispatch();
    const { totalOrderQuantity,paymentOption,orderProduct,selectedAddress } = useSelector(state => state.checkOut)
    

    const orderHandler = async () => {
        try {
            const orderDetails={
                orderedQuantity:totalOrderQuantity,
                sellerId:orderProduct.sellerId,
                address:selectedAddress,
                paymentMode:"COD"

            }
            const res = await dispatch(placedOrder({orderDetails,id}))
            if(res.type === "product/placedOrder/rejected"){
                toast.error(res.payload);                
            }
            
            dispatch(setClearOrderData())
        } catch (error) {
            console.log(error)
            toast.error("something went wrong");
        }
    }

    return (
        <>
            <div className=" w-full lg:w-4/5 border border-gray-400 mt-8 bg-blue-500 py-4 px-4 rounded-md shadow-md">
                <span className="text-lg font-bold text-white uppercase">Payment Option</span>
            </div>

            <div>
                {
                    paymentOption && <div className=" w-4/5 mt-4 p-4 rounded-md border-l-4 border-green-600 bg-green-100">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="payment"
                                value="Cash on Delivery"
                                className="accent-blue-600"
                            />
                            <span className="text-gray-800 font-medium">Cash on Delivery</span>
                        </label>
                        <button
                            onClick={orderHandler}
                            className='rounded-md px-4 py-2 mt-2 bg-amber-500 '>Placed Orde</button>

                    </div>
                }
            </div>
        </>




    );
}
