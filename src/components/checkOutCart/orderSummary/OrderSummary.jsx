import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setOrderProduct, setPaymentOption } from '../../../slices/checkOutSlice';
import { toast } from 'react-toastify';

export default function OrderSummary() {
  const { confirmDelivery, paymentOption } = useSelector((state) => state.checkOut);
  const { allCreateProducts } = useSelector((state) => state.product);
  const { id } = useParams();
  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(1)

  const orderedProduct = allCreateProducts.find((item) => item._id === id);

  const quantityHandler = (type) => {
    if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increase") {
      setQuantity(quantity + 1);
    }
  };

  const continueHandler = () => {
    if (!orderedProduct) {
      toast.error("Product not found");
      return;
    }

    dispatch(setOrderProduct({ orderedProduct, quantity }));
    dispatch(setPaymentOption())
    toast.success("Product added to order summary");
  };

  return (
    <div className='w-full lg:w-4/5'>
      <div className="border border-gray-400  mt-8 bg-blue-500 py-4 px-4 rounded-md shadow-md">
        <span className="text-lg font-bold text-white uppercase">Order Summary</span>
      </div>
      {
        paymentOption &&
        <div className="flex pt-4 mt-4 gap-4 rounded-md px-4 border-l-4 border-green-600 bg-green-100">
          <img
            src={orderedProduct.image}
            alt={orderedProduct.name}
            className="w-24 h-24 object-contain"
          />

          <div className="flex flex-col justify-between flex-grow">
            <div>
              <h2 className="text-sm font-semibold">{orderedProduct.name}</h2>
              <p className="text-xs text-gray-600">{orderedProduct.description}</p>
              <p className="text-xs text-gray-600">{`Price ${orderedProduct.price}`}</p>
              <p className="text-xs text-gray-600 font-bold">{`Items ${quantity}`}</p>
            </div>
          </div>
        </div>
      }
      <div className='bg-gray-200'>
        {confirmDelivery && orderedProduct && !paymentOption && (
          <>
            <div className="flex pt-4 mt-4 gap-4 rounded-md px-4">
              <img
                src={orderedProduct.image}
                alt={orderedProduct.name}
                className="w-24 h-24 object-contain"
              />

              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-sm font-semibold">{orderedProduct.name}</h2>
                  <p className="text-xs text-gray-600">{orderedProduct.description}</p>
                  <p className="text-xs text-gray-600">{`Price ${orderedProduct.price}`}</p>
                  <p className="text-xs text-gray-600">{`Items ${quantity}`}</p>
                </div>

                <div className="flex items-center justify-start mt-2 gap-2">
                  <button className="px-2 py-1 border rounded" onClick={() => quantityHandler("decrease")}>−</button>
                  <span className="px-2">{quantity}</span>
                  <button className="px-2 py-1 border rounded" onClick={() => quantityHandler("increase")}>+</button>
                </div>
              </div>


            </div>
          </>
        )}

        {
          !paymentOption && confirmDelivery && <button
            onClick={continueHandler}
            className='px-2 py-1 bg-amber-500 font-bold text-white rounded-md mx-4 w-1/5 mt-4 cursor-pointer' >Continue</button>
        }
      </div>
    </div>
  );
}
