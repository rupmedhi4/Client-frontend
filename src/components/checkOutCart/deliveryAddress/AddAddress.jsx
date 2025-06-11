import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAddressFormOpen } from '../../../slices/checkOutSlice'
import AddressForm from './AddressForm'

export default function AddAddress() {
    const dispatch = useDispatch()
    const { isAddressFormOpen } = useSelector(state => state.checkOut)

    const addressHandler = () => {
        dispatch(setIsAddressFormOpen())
    }
    return (
        <div>
            {

                <>
                    {
                        isAddressFormOpen ?
                        
                            <AddressForm />
                            :
                            <button
                                onClick={addressHandler}
                                className="text-blue  text-sm font-bold mt-2 px-4 hover:underline cursor-pointer"
                            >
                                + Add a new address
                            </button>
                    }
                </>
            }
        </div>
    )
}
