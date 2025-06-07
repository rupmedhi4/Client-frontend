import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 text-gray-800 pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" alt="logo" className="w-10 h-10" />
                        <h2 className="text-lg font-bold">FRESH CART <span className="text-green-600">SHOP ONLINE</span></h2>
                    </div>
                    <p className="text-sm mb-4">
                        We deliver more than your expectations and help you grow your business exponentially by providing customized applications.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold mb-3">All Category</h3>
                    <ul className="space-y-1 text-sm">
                        <li>› Dairy, Bread & Eggs</li>
                        <li>› Snacks & Munchies</li>
                        <li>› Fruits & Vegetables</li>
                        <li>› Cold Drinks & Juices</li>
                        <li>› Breakfast & Instant Food</li>
                        <li>› Bakery & Biscuits</li>
                        <li>› Chicken, Meat & Fish</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-3">For Consumers</h3>
                    <ul className="space-y-1 text-sm">
                        <li>› Careers</li>
                        <li>› Promos & coupons</li>
                        <li>› Shipping</li>
                        <li>› Product Returns</li>
                        <li>› Payments</li>
                        <li>› FAQ</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-3">Get to know us</h3>
                    <ul className="space-y-1 text-sm mb-4">
                        <li>› Company</li>
                        <li>› About</li>
                        <li>› Blog</li>
                        <li>› Help Center</li>
                        <li>› Our Value</li>
                    </ul>
                
                </div>
            </div>

            <div className="mt-10 border-t pt-4 text-center text-sm text-gray-600">
                © 2025 All Rights Reserved By <span className="text-green-600 font-semibold">@rupmedhi</span>
                <div className="flex justify-center mt-3 space-x-3">
                    <a href="#"><FaFacebookF className="text-gray-600 hover:text-black" /></a>
                    <a href="#"><FaTwitter className="text-gray-600 hover:text-black" /></a>
                    <a href="#"><FaInstagram className="text-gray-600 hover:text-black" /></a>
                    <a href="#"><FaLinkedin className="text-gray-600 hover:text-black" /></a>
                </div>
            </div>
        </footer>
    );
}
