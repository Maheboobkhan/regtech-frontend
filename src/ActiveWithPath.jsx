// // MobileDashboardWrapper.jsx
// import React from 'react';
// import { useMediaQuery } from 'react-responsive';
// import { useLocation } from 'react-router-dom';
// import MobileDashboard from './components/RoleMenu/DashboardForMobile';
// import Role0_Dashboard from './components/RoleMenu/Role0-Dashboard';
// import Role1_Dashboard from "./components/RoleMenu/Role1-Dashboard";

// const MainDashboard = () => {
//     const role_Id = 1;
//     const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
//     const location = useLocation();

//     return (
//         <>
//             if(role_Id === 0){
//                 {isMobile ? <MobileDashboard location={location} /> : <Role0_Dashboard location={location} />}
//             }
//             else{
//                 {isMobile ? <MobileDashboard location={location} /> : <Role1_Dashboard location={location} />}
//             }
//         </>
//     );
// };

// export default MainDashboard;

// MobileDashboardWrapper.jsx
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import MobileDashboard from "./components/RoleMenu/DashboardForMobile";
import Role0_Dashboard from "./components/RoleMenu/Role0-Dashboard";
// import Role1_Dashboard from "./components/RoleMenu/Role1-Dashboard";
import RolePrepaid_Dashboard from "./components/RoleMenu/RolePrepaid-Dashboard";
import RolePostpaid_Dashboard from "./components/RoleMenu/RolePostpaid-Dashboard";
import axios from "axios";
import Cookies from "js-cookie";

const MainDashboard = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchUser();
  }, []);
  const role_Id = 1; // Assuming role_Id is dynamically determined in a real scenario
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const location = useLocation();

  const fetchUser = async () => {
    const token = Cookies.get("authToken");
    if (!token) {
      return;
    }

    const domain = localStorage.getItem('domain');

    try {
      const response = await axios.get(
        `${domain}/getuser/${token}`
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Determine which component to render based on role_Id and isMobile
  let DashboardComponent;
  if (user.role_id === 0) {
    DashboardComponent = isMobile ? MobileDashboard : Role0_Dashboard;
  } else if (user.role_id === 1) {
    if (user.type === "role_prepaid") {
      DashboardComponent = isMobile ? MobileDashboard : RolePrepaid_Dashboard;
    } else if (user.type === "role_postpaid") {
      DashboardComponent = isMobile ? MobileDashboard : RolePostpaid_Dashboard;
    }
  } else {
    DashboardComponent = isMobile ? MobileDashboard : RolePrepaid_Dashboard;
  }

  return (
    <>
      <DashboardComponent location={location} />
    </>
  );
};

export default MainDashboard;
