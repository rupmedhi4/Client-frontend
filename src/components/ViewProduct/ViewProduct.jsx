import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleProduct } from '../../slices/productsSlice';
import { toast } from 'react-toastify';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import ShowProducts from './../home/showProducts/ShowProducts';
import { addToCart, fetchAddToCart } from '../../slices/cartSlice';

export default function ViewProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const { allCreateProducts } = useSelector((state) => state.product);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      try {
        const res = await dispatch(getSingleProduct(id));
        if (res.type === 'product/getSingleProduct/rejected') {
          setProduct(null);
          toast.error('Error fetching product');
        } else {
          setProduct(res.payload);
        }
        setLoading(false)
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error('Error in fetching data');
        setLoading(false)
      }
    };
    fetchProduct();
  }, [id]);

  const getFilteredData = (arr) => {
    let filteredData = (product && product.category && arr.length > 0)
      ? arr.filter((item) => item.category === product.category)
      : [];
    return filteredData.slice(0, 12)
  }

  const data = useMemo(() => {
    return getFilteredData(allCreateProducts || [])
  }, [product, allCreateProducts])


  const addToCartHandler = async () => {
    try {
      const res = await dispatch(addToCart(id))
      if (res.type === "cart/addToCart/fulfilled") {
        toast.success("Product Add successfully")
        await dispatch(fetchAddToCart());
      } else if (res.payload.status === 400) {
        toast.error("Product already in cart")
      }
    } catch (error) {
      console.log(error);

      toast.error("something went wrong")
    }
  }

  const orderHandler = () => {
    navigate(`/home/product/order/${id}`)
  }

  if (loading) return <LoadingScreen />
  if (!product) return <div className="text-center text-red-500 mt-10">Product not found</div>;

  return (
    <>
      <div className="container mx-auto pt-4 px-4 sm:px-6 lg:px-8 py-6 min-h-screen bg-gray-100">


        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/5 bg-white rounded-lg shadow-md p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 sm:h-80 lg:h-96 object-contain transition-transform duration-300 hover:scale-105"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/400?text=Product+Image')}
            />
            <div className="flex gap-2 mt-4">
              <button
                onClick={addToCartHandler}
                className="flex-1 bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition-colors duration-200 font-medium text-sm sm:text-base">
                Add to Cart
              </button>
              <button
                onClick={orderHandler}
                className="flex-1 bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors duration-200 font-medium text-sm sm:text-base">
                Buy Now
              </button>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">{product.name}</h1>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">₹{product.price}</span>
              </div>

              <div className="space-y-3">
                <p className="text-gray-600 text-sm sm:text-base">
                  <span className="font-semibold">Description: </span>{product.description}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  <span className="font-semibold">Category: </span>{product.category || 'General'}
                </p>
                <p className="text-gray-600 text-sm sm:text-base mt-2">
                  {
                    parseInt(product.quantity) <= 0 ? <span className="font-bold">Out of Stock</span> :
                      <>
                        <span className="font-bold">In Stock: </span>
                        {product.quantity}
                      </>
                  }
                </p>


              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Product Information</h3>
              <p className="text-sm text-gray-600">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        <ShowProducts products={data} title={"Related Products"} />
      </div>
    </>
  );
}
