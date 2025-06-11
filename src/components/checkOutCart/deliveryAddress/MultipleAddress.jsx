import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import AddAddress from './AddAddress';
import { setConfirmDelivery, setSelectedAddress } from '../../../slices/checkOutSlice';

export default function MultipleAddress() {

  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const { user } = useSelector((state) => state.auth);
  const { confirmDelivery, selectedAddress } = useSelector((state) => state.checkOut);
  
  console.log(user);

  

  const dispatch = useDispatch()

  const handleSelect = (id) => {
    setSelectedAddressId(id);
  };

  const deliveryBtn = (id) => {
    const address = user.address.find((item) => item._id === id);
    console.log(address);

    if (address) {
      dispatch(setConfirmDelivery())
      dispatch(setSelectedAddress(address))
    } else {
      toast.error("Error in delivery address");
    }
  };



  return (

    <>
      <div className="border border-gray-400 w-4/5 mt-8 bg-blue-500 py-4 px-4 rounded-md ">
        <span className="text-lg font-bold text-white uppercase">Delivery Address</span>
      </div>
        {
          confirmDelivery ? <div className="w-4/5 border-l-4 border-green-600 bg-green-100 p-5 rounded-md shadow-md">
            <h3 className=" w-4/5 text-lg font-semibold text-green-700 mb-2">Delivery Address Confirmed </h3>
            <div className="text-sm text-gray-800 space-y-1 pl-5">
              <span className='font-bold'>{selectedAddress.name}</span>
              <p>{selectedAddress.street}, {selectedAddress.city}, {selectedAddress.state}</p>
              <p>{selectedAddress.country} - {selectedAddress.pincode}</p>
              <p>Phone: {selectedAddress.number}</p>

            </div>
          </div>
            :
            <>
              <div className="mt-4 space-y-3 w-4/5 ">
                {user?.address?.filter((item)=>item && item.name && item.street).map((item,index) => (
                  <div key={item._id || index} >
                    <label
                      className={`flex flex-col gap-3 p-4 rounded-md cursor-pointer bg-white shadow-sm ${selectedAddressId === item._id ? 'border-2 border-amber-500' : 'border'
                        }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="deliveryAddress"
                          value={item._id}
                          checked={selectedAddressId === item._id}
                          onChange={() => handleSelect(item._id)}
                          className="mt-1"
                        />
                        <div className="text-gray-700 text-sm leading-tight">
                          <p><strong>{item.name}</strong></p>
                          <p>{item.street}, {item.city}, {item.state}</p>
                          <p>{item.country} - {item.pincode}</p>
                          <p>Phone: {item.number}</p>
                        </div>
                      </div>

                      {selectedAddressId === item._id && (
                        <button
                          onClick={() => deliveryBtn(item._id)}
                          className="cursor-pointer self-start bg-amber-500 text-white px-4 py-1 text-sm rounded hover:bg-amber-600 transition"
                        >
                          Deliver Here
                        </button>
                      )}
                    </label>
                  </div>
                ))}

                <AddAddress />
              </div>

            </>
        }
    </>
  );
}
