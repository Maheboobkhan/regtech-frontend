// ResponsiveDashboard.js
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopDashboard from '../components/RoleMenu/Role0-Dashboard';
import MobileDashboard from '../components/RoleMenu/DashboardForMobile';

const ResponsiveDashboard = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });

    return (
        <>
            {isDesktopOrLaptop ? <DesktopDashboard /> : <MobileDashboard />}
        </>
    );
};

export default ResponsiveDashboard;
