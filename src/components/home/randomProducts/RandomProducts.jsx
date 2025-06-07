import React from 'react';
import { useSelector } from 'react-redux';

export default function RandomProducts() {
  const { allCreateProducts } = useSelector((state) => state.product);

  const getRandomProducts = (arr) => {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  };

  const randomProducts = getRandomProducts(allCreateProducts || []);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto bg-gray-50">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8 tracking-tight">
        Discover Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {randomProducts.map((product) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{product.category}</p>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
            <p className="text-lg font-bold text-blue-600 mt-2">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}