import React,{Suspense,lazy} from "react";
import PublicRoute from "./PublicRoute";
import Login from '../components/authPages/Login'
import Home from '../components/home/Home'
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const Signup = lazy(()=>import('../components/authPages/Signup'))

const routes = [
  {
    path: "/",
    element: (
      <PublicRoute>
        <Home/>
      </PublicRoute>
    )
  },
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
      <Suspense fallback={<LoadingScreen/>}>
        <Signup />
      </Suspense>
      </PublicRoute>
    )
  },
 
 
];

export default routes;
