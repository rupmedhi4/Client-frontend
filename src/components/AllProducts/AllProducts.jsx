import React from 'react'
import { useSelector } from 'react-redux';
import { lazy,Suspense  } from 'react';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
const ShowProducts = lazy(() => import('../home/showProducts/ShowProducts'));


export default function AllProducts() {
    const { allCreateProducts } = useSelector((state) => state.product);

    return (
        <Suspense fallback={<LoadingScreen/>}>
            <ShowProducts products={allCreateProducts} title={"Explore Our Products"} />
        </Suspense>
    )
}
