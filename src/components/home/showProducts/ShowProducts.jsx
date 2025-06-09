import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToCart,fetchAddToCart } from '../../../slices/cartSlice';

const ShowProducts=({ products, title })=> {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const selectProductHandler = (id) => {
    navigate(`/home/product/${id}`);
  };

  const addToCartHandler = async (id) => {

    try {
      const res = await dispatch(addToCart(id))
      if (res.type === "cart/addToCart/fulfilled") {
        toast.success("Product Add successfully")
         await dispatch(fetchAddToCart());
      } else if (res.payload.status === 400) {
        toast.error("Product already in cart")
      } else {
        toast.error("something went wrong")
      }
    } catch (error) {
      toast.error("something went wrong")
    }
  }

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto bg-gray-50">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8 tracking-tight">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div

            key={product._id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <div className="relative w-full h-40 mb-4 overflow-hidden rounded-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="h-30"
              onClick={() => selectProductHandler(product._id)}
            >
              <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{product.category}</p>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {product.description.length > 20
                  ? product.description.slice(0, 20) + '...'
                  : product.description}
              </p>
            </div>

            <div className="flex justify-between items-center mt-2">
              <p className="text-lg font-bold text-blue-600">₹{product.price}</p>
              <button
                onClick={() => addToCartHandler(product._id)}
                className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition-colors duration-200 font-medium text-sm sm:text-base cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(ShowProducts);
