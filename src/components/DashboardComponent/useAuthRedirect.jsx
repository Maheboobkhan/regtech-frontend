// hooks/useAuthRedirect.js
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const useAuthRedirect = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const authToken = Cookies.get('authToken');
        const isAuthenticated = Boolean(authToken);
        const isDashboardOrProtectedRoute = location.pathname.startsWith('/dashboard');
        
        if (isAuthenticated && !isDashboardOrProtectedRoute) {
            navigate('/dashboard');
        }
    }, [location, navigate]);
};

export default useAuthRedirect;
