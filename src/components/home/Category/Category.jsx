import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: 'Fruits & Vegetables',
    image: 'https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Ffresh-vegetables.png&w=256&q=100'
  },
  {
    name: 'Dairy, Bread & Eggs',
    image: 'https://e7.pngegg.com/pngimages/954/63/png-clipart-boiled-eggs-chicken-egg-boiled-egg-ramen-boiled-egg-white-food-thumbnail.png'
  },
  {
    name: 'Snacks & Namkeen',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQoPGqqls_oFSR8DDzHrd1998qq-ijykQcGhlSgPNhAsmeD7MN5yK18UZuUnh2RI79xcrXOaNm8Hr4NKjOVYbR8SvpPsNHbYm1Mr4gQtM-DS3CyxbfqxrAmQ'
  },
  {
    name: 'Beverages',
    image: 'https://picksy.vercel.app/static/f69fcd60b6fb19c342ad609f0d5f1b5b/57ddc/milk-2-update-1.webp'
  },
  {
    name: 'Staples',
    image: 'https://img.freepik.com/free-photo/selection-different-grains-legumes_114579-4715.jpg'
  },
  {
    name: 'Personal Care',
    image: 'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2023-01/personal-care.jpg'
  },
  {
    name: 'Home Cleaning',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEkggRHVbGZcgxvnL4nDiokJHiajmHmN1lXA&s'
  },
  {
    name: 'Baby Care',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpznRIJ4y2QD-Nm18G_jog9XhAHZMpGgDNRQ&s'
  },
  {
    name: 'Pet Care',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtU5h1gYUWt2vrjvFFXX6hb8GRD_iIhCxc4g&s'
  },
  {
    name: 'Frozen Food',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2UPmOujj8OWTe_pE_bozZAd-ZSJ_wGIKCQ&s'
  },
  {
    name: 'Organic Products',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1QgSHUBsXNZpg76czq1zkng_j_3ej9Xk_g&s'
  },
  {
    name: 'Other',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoUVMkai_hNvgWziLgj649OfOSYFoZDz9Gg&s'
  }
];



export default function Category() {
  const navigate = useNavigate()

  const categoryHandler = (category) => {
      navigate(`/products/${category}`)
  }

  return (
    <div className="bg-gray-50 py-10 px-4 max-w-8xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 ">
        Shop Popular Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center ">
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
