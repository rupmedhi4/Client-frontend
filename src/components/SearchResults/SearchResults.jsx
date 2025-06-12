// components/SearchResults/SearchResults.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchResults({ products,setSearchTerm }) {
  const navigate = useNavigate()
  if (products.length === 0) {
    return <div className="text-center mt-5 text-gray-500">No matching products found.</div>;
  }

  const clickHandler=(id)=>{
    setSearchTerm("")
    navigate(`/home/product/${id}`)
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 bg-gray-50">
      {products.map(product => (
        <div key={product._id} 
        onClick={()=>clickHandler(product._id)}
        className="cursor-pointer border rounded-md p-4 bg-white shadow-sm">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
          <h2 className="font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="text-green-600 font-bold mt-1">₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
}
