import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: 'Fruits & Vegetables',
    image: 'https://img.freepik.com/free-photo/vegetables-basket_74190-5826.jpg'
  },
  {
    name: 'Dairy, Bread & Eggs',
    image: 'https://img.freepik.com/free-photo/dairy-products-table_114579-8681.jpg'
  },
  {
    name: 'Snacks & Namkeen',
    image: 'https://img.freepik.com/free-photo/top-view-delicious-nachos-cheese-sauce_23-2148750879.jpg'
  },
  {
    name: 'Beverages',
    image: 'https://img.freepik.com/free-photo/fresh-fruit-juices-glasses_144627-18530.jpg'
  },
  {
    name: 'Staples',
    image: 'https://img.freepik.com/free-photo/selection-different-grains-legumes_114579-4715.jpg'
  },
  {
    name: 'Personal Care',
    image: 'https://img.freepik.com/free-photo/personal-care-products_53876-64791.jpg'
  },
  {
    name: 'Home Cleaning',
    image: 'https://img.freepik.com/free-photo/set-cleaning-products_144627-33146.jpg'
  },
  {
    name: 'Baby Care',
    image: 'https://img.freepik.com/free-photo/baby-products_144627-12129.jpg'
  },
  {
    name: 'Pet Care',
    image: 'https://img.freepik.com/free-photo/puppy-kitten-together_53876-64841.jpg'
  },
  {
    name: 'Frozen Food',
    image: 'https://img.freepik.com/free-photo/frozen-vegetables-mix_114579-41579.jpg'
  },
  {
    name: 'Organic Products',
    image: 'https://img.freepik.com/free-photo/organic-products_144627-13259.jpg'
  },
  {
    name: 'Other',
    image: 'https://img.freepik.com/free-photo/various-groceries-bag_144627-23471.jpg'
  }
];



export default function Category() {
  const navigate = useNavigate()

  const categoryHandler = (category) => {
      navigate(`/products/${category}`)
  }

  return (
    <div className="bg-gray-50 py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 ">
        Shop Popular Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
        {categories.map((cat, index) => (
          <div
            onClick={()=>categoryHandler(cat.name)}
            key={index}
            className="flex flex-col items-center mb-6 cursor-pointer "
          >
            <div className="bg-gray-200 rounded-full w-28 h-28 flex items-center justify-center mb-3 overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-36 h-36 object-contain"
              />
            </div>
            <span className="text-sm font-medium">{cat.name}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
