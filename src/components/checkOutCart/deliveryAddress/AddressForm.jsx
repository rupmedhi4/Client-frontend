import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAddress, setIsAddressFormOpen } from '../../../slices/checkOutSlice';
import { toast } from 'react-toastify';
import { fetchUserData } from '../../../slices/authSlice';

export default function AddressForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    country: '',
    zip: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    dispatch(setIsAddressFormOpen());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userAddress = {
      street: formData.street,
      city: formData.city,
      state: formData.state,
      country: formData.country,
      pincode: formData.zip,
      name: formData.name,
      number: parseInt(formData.phone),
    };

    try {
      await dispatch(addAddress(userAddress));
      await dispatch(fetchUserData());
      dispatch(setIsAddressFormOpen());
      toast.success("Address added successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-white rounded-md p-6 w-full max-w-lg mx-auto shadow-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Add New Address</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="10-digit phone"
            />
          </div>
        </div>

        {/* Street */}
        <div>
          <label className="text-sm font-medium text-gray-700">Street Address</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
            className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Street name / house no."
          />
        </div>

        {/* City & State */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter city"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter state"
            />
          </div>
        </div>

        {/* Country & Zip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter country"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Zip Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="6-digit ZIP"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Save Address
          </button>
        </div>
      </form>
    </div>
  );
}
