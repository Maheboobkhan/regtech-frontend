// // src/components/PrivateRoute.js

// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

// // Higher-Order Component to protect routes
// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const token = Cookies.get('authToken');

//   return token ? <Element {...rest} /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;


// src/components/PrivateRoute.js

import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if user is authenticated
  const token = Cookies.get('authToken');
  const domain = localStorage.getItem('domain');

  useEffect(() => {
    const verifyUser = async () => {
      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${domain}/getuser/${token}`);
        // console.log(response);
        // Check if the response data is empty
        setIsAuthenticated(response.data && response.data !== '' && (response.data.access_token === token) ? true : false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    verifyUser();
  }, [token, domain]);

  if (isLoading) {
    // You can return a loading indicator here if needed
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
