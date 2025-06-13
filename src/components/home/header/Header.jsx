import React from 'react';
import Cookies from 'js-cookie';
import { IoCartOutline } from "react-icons/io5";
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../../slices/cartSlice';
import { logout } from '../../../slices/authSlice';
import { toast } from 'react-toastify';

export default function Header({ searchTerm, setSearchTerm }) {
    const cookie = Cookies.get("jwt");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cartData } = useSelector(state => state.cart);

    const viewCartHandler = () => {
        dispatch(toggleCart());
        setSearchTerm("");
    };

    const logoutHandler = async () => {
        try {
            await dispatch(logout());
            setSearchTerm("");
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
            toast.error('Logout failed');
        }
    };

    return (
        <header className="bg-white shadow-md sm:rounded-full mt-2 sm:sticky sm:top-0 sm:z-50 sm:mx-15">
            <div className=" mx-auto flex flex-col items-center sm:px-4 py-3 sm:max-w-7xl sm:flex sm:flex-row sm:items-center sm:justify-between">
                <div onClick={() => navigate("/")} className="cursor-pointer">
                    <img
                        src="https://nigammishra.github.io/Grocery-react/static/media/Grocerylogo.f1c1c78ea85df17396c7.png"
                        alt="Fresh Cart Logo"
                        className="h-10 mb-4 sm:mb-0"
                    />
                </div>

                {cookie ? (
                    <>
                        <div className="flex-1 mx-6">
                            <input
                                type="text"
                                placeholder="Type to search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full"
                            />
                        </div>

                        <nav className="flex flex-col sm:flex sm:flex-row items-center space-x-6 text-sm font-medium text-gray-700">
                            <Link to="/" onClick={() => setSearchTerm("")} className="mt-4 sm:mt-0 hover:text-green-600">Home</Link>
                            <Link to="/products" onClick={() => setSearchTerm("")} className="hover:text-green-600 mt-2 sm:mt-0">All Products</Link>
                            <Link to="/product/orders/view" onClick={() => setSearchTerm("")} className="hover:text-green-600 mt-2 sm:mt-0">My Orders</Link>

                            <div className="relative cursor-pointer mt-4 sm:mt-0">
                                <div onClick={viewCartHandler}>
                                    <IoCartOutline className="text-2xl hover:text-green-600" />
                                    <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                                        {cartData.length > 0 ? cartData.length : 0}
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={logoutHandler}
                                className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-5 rounded-md transition duration-300 mt-2 sm:mt-0 mr-6 sm:mr-0"
                            >
                                Logout
                            </button>
                        </nav>
                    </>
                ) : (
                    <nav className="flex items-center space-x-4">
                        <button
                            onClick={() => navigate("/login")}
                            className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-5 rounded-md transition duration-300"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => navigate("/signup")}
                            className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-5 rounded-md transition duration-300"
                        >
                            Signup
                        </button>
                    </nav>
                )}
            </div>
        </header>
    );
}
