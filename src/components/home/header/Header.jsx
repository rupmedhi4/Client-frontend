import React from 'react';
import Cookies from 'js-cookie';
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
    const cookie = Cookies.get("jwt");

    return (
        <header className="bg-white shadow-md rounded-full mt-2">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between ">
                <div >
                    <img
                        src="https://nigammishra.github.io/Grocery-react/static/media/Grocerylogo.f1c1c78ea85df17396c7.png"
                        alt="Fresh Cart Logo"
                        className="h-10"
                    />
                </div>

                <div className="flex-1 mx-6 ">
                    <input
                        type="text"
                        placeholder="Type to search..."
                        className="w-full px-4 py-2  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full"
                    />
                </div>

                <nav className="flex items-center space-x-6 text-sm font-medium text-gray-700">
                    <span className="hover:text-green-600 cursor-pointer">Home</span>
                    <span className="hover:text-green-600 cursor-pointer">All Category</span>
                    <span className="hover:text-green-600 cursor-pointer">My Orders</span>
                    <div className="relative cursor-pointer">
                    <div>
                        <IoCartOutline className="text-2xl hover:text-green-600" />
                        <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">3</span>
                    </div>
                    </div>
                    {
                        cookie ?
                            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-5 rounded-md transition duration-300 outline-none cursor-pointer">
                                Logout
                            </button> :
                            <>
                                <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-5 rounded-md transition duration-300 outline-none cursor-pointer">
                                    Login
                                </button>
                                <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-5 rounded-md transition duration-300 outline-none cursor-pointer">
                                    Signup
                                </button>
                            </>
                    }

                </nav>
            </div>
        </header>
    );
}
