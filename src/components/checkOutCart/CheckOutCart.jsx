import React from 'react'
import MultipleAddress from './deliveryAddress/MultipleAddress';
import OrderSummary from './orderSummary/OrderSummary';
import PaymentOptioon from './paymentOption/PaymentOptioon';
import PriceDetails from './PriceDetails';

export default function CheckOutCart() {

    return (
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 p-4">
            {/* Left Side - All checkout steps */}
            <div className="flex-1 space-y-6">
                <MultipleAddress />
                <OrderSummary />
                <PaymentOptioon />
            </div>

            {/* Right Side - Price Details */}
            <div className="w-full md:w-1/3 md:mt-8 ">
            
                <PriceDetails />
            </div>
        </div>
    )
}
