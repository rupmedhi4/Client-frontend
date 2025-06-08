import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';

const ShowProducts = lazy(()=>import("../showProducts/ShowProducts"))

export default function DetailsCategoryProducts() {
    const { allCreateProducts } = useSelector((state) => state.product);
    const { category } = useParams()

    let filteredData = allCreateProducts.length > 0
        ? allCreateProducts.filter((item) => item.category === category)
        : [];

  

    return (
        <Suspense fallback={<LoadingScreen/>}>
            <ShowProducts products={filteredData} title={`All ${category} Products` }/>
        </Suspense>
    )
}
