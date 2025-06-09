import React, { Suspense, lazy } from "react";
import PublicRoute from "./PublicRoute";
import Login from '../components/authPages/Login'
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import ProtectedRoute from "./ProtectedRoute";
import AllProducts from "../components/AllProducts/AllProducts";
import DetailsCategoryProducts from "../components/home/Category/DetailsCategoryProducts";
import AddToCart from "../components/addToCart/AddToCart";

const Signup = lazy(() => import('../components/authPages/Signup'))
const Home = lazy(() => import('../components/home/Home'))
const ViewProduct = lazy(() => import('../components/ViewProduct/ViewProduct'))

const routes = [
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    )
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <Suspense fallback={<LoadingScreen />}>
          <Signup />
        </Suspense>
      </PublicRoute>
    )
  },
  {
    path: "/",
    element: (
        <Suspense fallback={<LoadingScreen />}>
        <Home />
      </Suspense>
    )
  },
  {
    path: "/home/product/:id",
    element: (
      <Suspense >
        <ViewProduct />
      </Suspense>
    )
  },
  {
    path: "/products",
    element: (
      <ProtectedRoute>
        <AllProducts />
      </ProtectedRoute>
    )
  },
  {
    path: "/products/:category",
    element: (
      <ProtectedRoute>
        <DetailsCategoryProducts />
      </ProtectedRoute>
    )
  },



];

export default routes;
