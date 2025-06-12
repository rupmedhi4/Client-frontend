import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../slices/checkOutSlice';
import { toast } from 'react-toastify';

export default function ViewOrders() {
  const dispatch = useDispatch();
  const { totalOrderedProducts } = useSelector((state) => state.checkOut);
console.log(totalOrderedProducts);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        await dispatch(getOrders());
      } catch (err) {
        toast.error("Error fetching orders");
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {totalOrderedProducts?.map((order) => (
        <div key={order._id} className="bg-white shadow-md rounded-lg mb-6 p-4">
          <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
            <div>
              <span className="font-semibold">Order</span>{" "}
              <span className="text-blue-600">{`#${order._id.slice(-8)}  |  `}</span> 
              Order Placed: {new Date(order.createdAt).toLocaleDateString()}
            </div>
          </div>

          <div className="flex items-center gap-4 border-b pb-4">
            <img
              src={order.productId.image}
              alt={order.productId.name}
              className="w-20 h-24 object-cover rounded border"
            />
            <div className="flex-1">
              <h2 className="font-semibold">{order.productId.name}</h2>
              <p className="text-sm">Qty: {order.orderedQuantity}</p>
              <p className="font-bold text-lg text-gray-700 mt-1">
                ₹{order.productId.price}
              </p>
            </div>

            <div className="text-right text-sm">
              <p className="text-gray-600">Status</p>
              <p className="text-orange-500 font-semibold capitalize">{order.status}</p>
              <p className="mt-1 text-gray-600">Delivery Expected by</p>
              <p className="font-bold">
                {new Date(order.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm pt-4">
            <span className="text-gray-600  font-bold">Total Price</span>
            <div className="font-bold text-lg text-gray-800">
              ₹{Number(order.productId.price) * order.orderedQuantity}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
