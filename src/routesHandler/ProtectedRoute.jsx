import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function ProtectedRoute({ children }) {
  const isLoggedIn = Cookies.get("jwt")

  return isLoggedIn ? children : <Navigate to="/login" />;
}
