import React, { Suspense, lazy } from "react";
import PublicRoute from "./PublicRoute";
import Login from '../components/authPages/Login'
import Home from '../components/home/Home'
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import ProtectedRoute from "./ProtectedRoute";
import ViewProduct from "../components/ViewProduct/ViewProduct";
import AllProducts from "../components/AllProducts/AllProducts";
import DetailsCategoryProducts from "../components/home/Category/DetailsCategoryProducts";

const Signup = lazy(() => import('../components/authPages/Signup'))

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
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    )
  },
  {
    path: "/home/product/:id",
    element: (
      <ProtectedRoute>
        <ViewProduct />
      </ProtectedRoute>
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
