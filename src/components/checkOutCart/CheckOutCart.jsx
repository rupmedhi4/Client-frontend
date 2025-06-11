import React from 'react'
import MultipleAddress from './deliveryAddress/MultipleAddress';
import OrderSummary from './orderSummary/OrderSummary';

export default function CheckOutCart() {
 
     return (
        <>
                <MultipleAddress/>
                <OrderSummary/>
        </>
    )
}
