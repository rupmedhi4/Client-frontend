import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAddToCart, toggleCart } from '../../slices/cartSlice'
import { useNavigate } from 'react-router-dom'

export default function AddToCart() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { cartData } = useSelector(state => state.cart)
  const total = cartData.reduce((acc, item) => acc + parseInt(item.price), 0)

const orderHandler =(id)=>{
  navigate(`/home/product/order/${id}`)
  dispatch(toggleCart())
}

  return (
    <div className="fixed top-0  right-0 h-full w-full sm:w-[400px] bg-white shadow-lg p-4 overflow-y-auto">

      <button className='bg-pink-500 rounded-full p-2 absolute top-6 right-6 cursor-pointer'
        onClick={() => dispatch(toggleCart())}
      >
        close
      </button>
      <h2 className='border-b-2 mt-6 pb-4 text-lg font-semibold'>My Shopping Bag</h2>

      <div className='flex justify-between pt-4 font-semibold text-gray-700'>
        <span className="w-1/2">Products</span>
        <span className="w-1/4 text-center">Price</span>
      </div>

      {cartData.map((item,index) => (
        <div key={item._id || index} className='flex items-center justify-between py-4 border-b'>

          <div className="flex flex-col w-1/2">
            <div className='flex items-center gap-3 cursor-pointer'>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            <div className='flex gap-4 mt-2 '>
              <button 
                  className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition cursor-pointer "
                  onClick={() =>dispatch(deleteAddToCart(item._id))}
              >
                Remove</button>
              <button 
              onClick={()=>orderHandler(item._id)}
              className="bg-yellow-600 text-white px-2 py-1 rounded hover:bg-yellow-700 transition cursor-pointer">

                Order
              </button>
            </div>
          </div>

          <span className="w-1/4 text-center text-sm">₹{item.price}</span>


        </div>
      ))}

      <div className='mt-6 text-right font-bold text-lg  pt-4'>
        Total: ₹{total}
      </div>
    </div>
  )
}
