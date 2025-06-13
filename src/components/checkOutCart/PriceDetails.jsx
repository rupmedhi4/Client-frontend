import React from 'react';
import { useSelector } from 'react-redux';

export default function PriceDetails() {
  const { totalOrderQuantity, orderProduct } = useSelector(state => state.checkOut);
  const totalPrice = orderProduct?.price ? orderProduct.price * totalOrderQuantity : 0;

  return (
    <div className=" lg:w-[400px] bg-white rounded shadow p-4 ">
      <h2 className="text-gray-600 text-sm font-semibold mb-3">PRICE DETAILS</h2>
      <div className="flex justify-between text-sm text-gray-800 mb-2">
        <span>{`Price (${totalOrderQuantity} item${totalOrderQuantity > 1 ? 's' : ''})`}</span>
        <span>{`₹ ${totalPrice}`}</span>
      </div>
      <div className="flex justify-between text-sm text-gray-800 mb-2">
        <span>Delivery Charges</span>
        <span>
          <s className="text-gray-500">₹40</s>
          <span className="text-green-600 font-medium">FREE</span>
        </span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between font-semibold text-base text-gray-900">
        <span>Total Payable</span>
        <span>{`₹ ${totalPrice}`}</span>
      </div>
    </div>
  );
}
