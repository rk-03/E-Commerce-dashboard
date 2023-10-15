import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateComponent = () => {
  const auth = JSON.parse(localStorage.getItem('user')); // Parse the stored user data

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateComponent;
