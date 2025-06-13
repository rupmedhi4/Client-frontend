import React from 'react'
import MultipleAddress from './deliveryAddress/MultipleAddress';
import OrderSummary from './orderSummary/OrderSummary';
import PaymentOptioon from './paymentOption/PaymentOptioon';
import PriceDetails from './PriceDetails';

export default function CheckOutCart() {

    return (
          <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-6 p-4 ml-12">
            <div className="flex-1 space-y-6">
                <MultipleAddress />
                <OrderSummary />
                <PaymentOptioon />
            </div>

            <div className="w-full lg:w-1/3 md:mt-8 mr-24">
            
                <PriceDetails />
            </div>
        </div>
    )
}
