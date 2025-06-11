import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setOrderProduct } from '../../../slices/checkOutSlice';
import { toast } from 'react-toastify';

export default function OrderSummary() {
  const { confirmDelivery } = useSelector((state) => state.checkOut);
  const { allCreateProducts } = useSelector((state) => state.product);
  const { id } = useParams();
  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(1)

  const orderedProduct = allCreateProducts.find((item) => item._id === id);

  const quantityHandler = (type) => {
    if (type === "decrease") {
      setQuantity(() => quantity - 1)
    } else {
      setQuantity(() => quantity + 1)
    }
  }
  console.log(orderedProduct);


  const continueHandler = () => {
    dispatch(setOrderProduct({ orderedProduct, quantity }))
  }

  return (
    <div className='w-3/5'>
      <div className="border border-gray-400  mt-8 bg-blue-500 py-4 px-4 rounded-md shadow-md">
        <span className="text-lg font-bold text-gray-800 uppercase">Order Summary</span>
      </div>
      <div className='bg-gray-200'>
        {confirmDelivery && orderedProduct ? (
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
                </div>

                <div className="flex items-center justify-start mt-2 gap-2">
                  <button className="px-2 py-1 border rounded" onClick={() => quantityHandler("decrease")}>−</button>
                  <span className="px-2">{quantity}</span>
                  <button className="px-2 py-1 border rounded" onClick={() => quantityHandler("increase")}>+</button>
                </div>
              </div>


            </div>

            <button
              disabled={!orderedProduct}
              onClick={continueHandler}
              className='px-2 py-1 bg-amber-500 font-bold text-white rounded-md mx-4 w-1/5 mt-4 cursor-pointer' >Continue</button>

          </>
        ):<div className='flex justify-center py-4 text-red-500 font-bold'>
         <p>Something wrong please try again....</p>
        </div>
        
        }
      </div>
    </div>
  );
}
