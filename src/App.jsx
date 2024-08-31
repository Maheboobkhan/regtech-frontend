// import React, { Component } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import CustomerVerification from './pages/CustomerVerification';
// import Navbar from './components/Header';
// import Footer from './components/Footer';
// import BankAccountVerification from './pages/BankAccountVerification';
// import EKyc from './pages/EKyc';
// import VideoKyc from './pages/VideoKyc';
// import ESign from './pages/ESign';
// import OfflineAadhar from './pages/OfflineAadhar';
// import AadharMasking from './pages/AadharMasking';
// import DBFMatch from './pages/DBFMatch';
// import Enach from './pages/Enach';
// import Demo from './pages/Demo';
// import LoginPage from './pages/Login';
// import ContactUs from './pages/ContactUs';
// import Company from './pages/Company';
// import Careers from './pages/Careers';
// import Blog from './pages/Blog';
// import withLocation from './components/withLocation';
// import ChatComponent from './components/ChatPage';
// import AdminChat from './pages/AdminChat';
// import ResponsiveDashboard from './pages/ResponsiveDashboard';
// import Users from './components/Users';
// import DashboardCards from './components/DashboardCards';
// import Dashboard from './components/Dashboard';
// // import LiveChatWidget from './components/LiveChatWidget';

// class App extends Component {
//   render() {
//     const { location } = this.props;

//     // Define the paths where the footer should not be displayed
//     const hideFooterPaths = ['/login', '/chat', 'dashboard/*', '/users'];
//     const hideNavbar = ['/chat', 'dashboard/*', '/users'];

//     // Check if the current path is in the list of paths to hide the footer
//     const shouldHideFooter = hideFooterPaths.includes(location.pathname);
//     const shouldHideNavbar = hideNavbar.includes(location.pathname);

//     return (
//       <div className='overflow-x-hidden'>
//         {!shouldHideNavbar && <Navbar />}
//         {!shouldHideNavbar && <ChatComponent />}
//         {/* <LiveChatWidget /> */}
//         {/* <Chit /> */}
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/customer_verification' element={<CustomerVerification />} />
//           <Route path='/account_verification' element={<BankAccountVerification />} />
//           <Route path='/e_kyc' element={<EKyc />} />
//           <Route path='/video_kyc' element={<VideoKyc />} />
//           <Route path='/e_sign' element={<ESign />} />
//           <Route path='/offline_aadhar' element={<OfflineAadhar />} />
//           <Route path='/aadhar_masking' element={<AadharMasking />} />
//           <Route path='/face-match' element={<DBFMatch />} />
//           <Route path='/e-nach' element={<Enach />} />
//           <Route path='/demo' element={<Demo />} />
//           <Route path='/login' element={<LoginPage />} />
//           <Route path='/contact-us' element={<ContactUs />} />
//           <Route path='/company' element={<Company />} />
//           <Route path='/careers' element={<Careers />} />
//           <Route path='/blog' element={<Blog />} />
//           <Route path='/chat' element={<AdminChat />} />
//           <Route path='dashboard/*' element={<Dashboard />} />
//         </Routes>
//         {!shouldHideFooter && <Footer />}
//       </div>
//     );
//   }
// }

// // Wrap the class component with withRouter to get routing props
// export default withLocation(App);









import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CustomerVerification from './pages/CustomerVerification';
import Navbar from './components/Header';
import Footer from './components/Footer';
import BankAccountVerification from './pages/BankAccountVerification';
import EKyc from './pages/EKyc';
import VideoKyc from './pages/VideoKyc';
import ESign from './pages/ESign';
import OfflineAadhar from './pages/OfflineAadhar';
import AadharMasking from './pages/AadharMasking';
import DBFMatch from './pages/DBFMatch';
import Enach from './pages/Enach';
import Demo from './pages/Demo';
import LoginPage from './pages/Login';
import ContactUs from './pages/ContactUs';
import Company from './pages/Company';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import ChatComponent from './components/ChatPage';
import AdminChat from './pages/AdminChat';
// import Dashboard from './pages/Dashboard';
import ResponsiveDashboard from './pages/ResponsiveDashboard';
import ActiveWithPath from './ActiveWithPath';

const App = () => {
    const location = useLocation();
    const hideFooterPaths = ['/chat', '/dashboard', '/users'];
    const shouldHideFooter = hideFooterPaths.some(path => location.pathname.startsWith(path));
    const shouldHideNavbar = hideFooterPaths.some(path => location.pathname.startsWith(path));

    return (
        <div className='overflow-x-hidden'>
            {!shouldHideNavbar && <Navbar />}
            {!shouldHideNavbar && <ChatComponent />}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/customer_verification' element={<CustomerVerification />} />
                <Route path='/account_verification' element={<BankAccountVerification />} />
                <Route path='/e_kyc' element={<EKyc />} />
                <Route path='/video_kyc' element={<VideoKyc />} />
                <Route path='/e_sign' element={<ESign />} />
                <Route path='/offline_aadhar' element={<OfflineAadhar />} />
                <Route path='/aadhar_masking' element={<AadharMasking />} />
                <Route path='/face-match' element={<DBFMatch />} />
                <Route path='/e-nach' element={<Enach />} />
                <Route path='/demo' element={<Demo />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='/company' element={<Company />} />
                <Route path='/careers' element={<Careers />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/chat' element={<AdminChat />} />
                {/* <Route path='/dashboard/*' element={<ResponsiveDashboard />} /> */}
                <Route path='/dashboard/*' element={<ActiveWithPath />} />
            </Routes>
            {!shouldHideFooter && <Footer />}
        </div>
    );
};

export default App;






























// Tabs.js
// import React, { Component } from 'react';

// class Tabs extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeTab: 'chat'
//         };
//     }

//     handleTabClick = (tab) => {
//         this.setState({ activeTab: tab });
//     };

//     render() {
//         const { activeTab } = this.state;

//         return (
//             <div className="p-4">
//                 <div className="flex border-b">
//                     <button
//                         className={`px-4 py-2 font-semibold ${activeTab === 'chat' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
//                         onClick={() => this.handleTabClick('chat')}
//                     >
//                         Chat
//                     </button>
//                     <button
//                         className={`px-4 py-2 font-semibold ${activeTab === 'message' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
//                         onClick={() => this.handleTabClick('message')}
//                     >
//                         Message
//                     </button>
//                 </div>
//                 <div className="mt-4">
//                     {activeTab === 'chat' && <p>chat</p>}
//                     {activeTab === 'message' && <p>message</p>}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Tabs;
