import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomerVerification from './pages/CustomerVerification';
import Home from './pages/Home';
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
import MainDashboard from './ActiveWithPath';
import PrivateRoute from './components/DashboardComponent/PrivateRoute';
import PaymentFail from './components/DashboardComponent/PaymentStatus/PaymentFail';
import PaymentSuccess from './components/DashboardComponent/PaymentStatus/PaymentSuccess';

const App = () => {
    const location = useLocation();
    const hideFooterPaths = ['/chat', '/dashboard', '/users', '/dem', '/failure_url'];
    const shouldHideFooter = hideFooterPaths.some(path => location.pathname.startsWith(path));
    const shouldHideNavbar = hideFooterPaths.some(path => location.pathname.startsWith(path));

    // useAuthRedirect();

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
                <Route path='/failure_url/:name_on_card/:error_Message' element={<PaymentFail />} />
                <Route path='/success_url/:amount/:txnid' element={<PaymentSuccess />} />
                {/* <Route path='/dashboard/*' element={<ResponsiveDashboard />} /> */}
                {/* <Route path='/dashboard/*' element={<MainDashboard />} /> */}
                <Route path='/dashboard/*' element={<PrivateRoute element={MainDashboard} />} />
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
