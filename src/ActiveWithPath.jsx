// MobileDashboardWrapper.jsx
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import MobileDashboard from './components/DashboardForMobile';
import Dashboard from './components/Dashboard';

const MobileDashboardWrapper = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const location = useLocation();
    
    return (
        <>
            {isMobile ? <MobileDashboard location={location} /> : <Dashboard location={location} />}
        </>
    );
};

export default MobileDashboardWrapper;
