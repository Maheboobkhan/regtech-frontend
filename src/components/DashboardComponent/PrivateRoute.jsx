// src/components/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

// Higher-Order Component to protect routes
const PrivateRoute = ({ element: Element, ...rest }) => {
  const token = Cookies.get('authToken');

  return token ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
