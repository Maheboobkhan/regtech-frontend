// // MobileDashboard.js
// import React, { Component } from 'react';
// import { FaRegUser } from 'react-icons/fa';
// import { MdOutlineReportGmailerrorred } from 'react-icons/md';
// import { IoSpeedometerOutline } from 'react-icons/io5';
// import { RiMenuFold2Line, RiMenuFoldLine } from 'react-icons/ri';
// import { FaIndianRupeeSign } from 'react-icons/fa6';
// import { IoDocumentTextOutline } from 'react-icons/io5';
// import { GrDocumentVerified } from 'react-icons/gr';
// import { MdCorporateFare } from 'react-icons/md';
// import { PiKey } from 'react-icons/pi';
// import { BsBank } from 'react-icons/bs';

// class MobileDashboard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             sidebarOpen: false,
//         };
//     }

//     toggleSidebar = () => {
//         this.setState({ sidebarOpen: !this.state.sidebarOpen });
//     };

//     render() {
//         const { sidebarOpen } = this.state;
//         return (
//             <div className="flex md:hidden flex-col h-screen">
//                 {/* Mobile Navbar */}
//                 <div className="bg-[#f5a7ca] py-1 flex justify-between pr-4 items-center z-10">
//                     <div className="cursor-pointer text-2xl" onClick={this.toggleSidebar}>
//                         {sidebarOpen ? <RiMenuFold2Line className="font-bold text-3xl hover:text-gray-700 ml-4" /> : <RiMenuFoldLine className="font-bold text-3xl hover:text-gray-700" />}
//                     </div>
//                     <h1 className="text-4xl text-gray-600">Dashboard</h1>
//                     <div className="flex items-center">
//                         <div className="flex flex-col items-center mr-10">
//                             <h3 className="font-medium"><span className="font-bold">Rs.</span> 2708.38</h3>
//                             <button className="hover:bg-[#f175a9] hover:text-white transition-all border-[2px] text-base text-[#e27] border-[#e27] px-2 py-1">Add Amount</button>
//                         </div>
//                         <div className="flex items-center mr-4 hover:text-gray-700 cursor-pointer">
//                             <FaRegUser />
//                             <h3 className="font-bold">Pritesh Sir</h3>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile Sidebar */}
//                 <div className={`fixed z-50 top-0 left-0 h-full bg-[#e27daa] bg-opacity-10 shadow-2xl transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-3/4 md:w-1/2 lg:w-1/3`}>
//                     <div className="pt-4 pl-4">
//                         <img src="logo/logo2.png" alt="Logo" className="w-1/2" />
//                     </div>
//                     <ul className="mt-4">
//                         <li className="flex items-center py-3 px-4 transition-all hover:bg-[#f5a7ca] cursor-pointer">
//                             <IoSpeedometerOutline className="text-xl ml-2" />
//                             <span className="ml-2">Prepaid Dashboard</span>
//                         </li>
//                         <li className="flex items-center py-3 px-4 transition-all hover:bg-[#f5a7ca] cursor-pointer">
//                             <IoSpeedometerOutline className="text-xl ml-2" />
//                             <span className="ml-2">Prepaid Scheme</span>
//                         </li>
//                         <li className="flex items-center py-3 px-4 transition-all hover:bg-[#f5a7ca] cursor-pointer">
//                             <FaRegUser className="text-xl ml-2" />
//                             <span className="ml-2">Users</span>
//                         </li>
//                         <li className="flex items-center py-3 px-4 transition-all hover:bg-[#f5a7ca] cursor-pointer">
//                             <MdOutlineReportGmailerrorred className="text-xl ml-2" />
//                             <span className="ml-2">Report</span>
//                         </li>
//                         <li className="flex items-center py-3 px-4 transition-all hover:bg-[#f5a7ca] cursor-pointer">
//                             <FaIndianRupeeSign className="text-xl ml-2" />
//                             <span className="ml-2">Transaction</span>
//                         </li>
//                         <li className="flex items-center py-3 px-4 transition-all hover:bg-[#f5a7ca] cursor-pointer">
//                             <IoDocumentTextOutline className="text-xl ml-2" />
//                             <span className="ml-2">API Docs</span>
//                         </li>
//                         <li className="flex items-center py-3 px-4 transition-all hover:bg-[#f5a7ca] cursor-pointer">
//                             <GrDocumentVerified className="text-xl ml-2" />
//                             <span className="ml-2">KYC VERIFICATION</span>
//                         </li>
//                         <li className="flex items-center py-3 px-4 transition-all hover:bg-[#f5a7ca] cursor-pointer">
//                             <MdCorporateFare className="text-xl ml-2" />
//                             <span className="ml-2">Corporate</span>
//                         </li>
//                         <li className="flex items-center py-3 px-4 transition-all hover:bg-[#f5a7ca] cursor-pointer">
//                             <BsBank className="text-xl ml-2" />
//                             <span className="ml-2">Bank Verification</span>
//                         </li>
//                         <li className="flex items-center py-3 px-4 transition-all hover:bg-[#f5a7ca] cursor-pointer">
//                             <PiKey className="text-xl ml-2" />
//                             <span className="ml-2">Change Password</span>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         );
//     }
// }

// export default MobileDashboard;
















// MobileDashboard.js
// import React, { useState } from 'react';
// import { FaRegUser } from 'react-icons/fa';
// import { MdOutlineReportGmailerrorred } from 'react-icons/md';
// import { IoSpeedometerOutline } from 'react-icons/io5';
// import { RiMenuFold2Line, RiMenuFoldLine } from 'react-icons/ri';
// import { FaIndianRupeeSign } from 'react-icons/fa6';
// import { IoDocumentTextOutline } from 'react-icons/io5';
// import { GrDocumentVerified } from 'react-icons/gr';
// import { MdCorporateFare } from 'react-icons/md';
// import { PiKey } from 'react-icons/pi';
// import { BsBank } from 'react-icons/bs';
// import { RiArrowDropUpLine } from 'react-icons/ri';
// import { RxCross2 } from "react-icons/rx";
// import { RiMenu3Line } from "react-icons/ri";

// const MobileDashboard = () => {
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [kycDropdownOpen, setKycDropdownOpen] = useState(false);
//     const [corporateDropdownOpen, setCorporateDropdownOpen] = useState(false);
//     const [bankVerificationDropdownOpen, setBankVerificationDropdownOpen] = useState(false);
//     const [openWalletModal, setOpenWalletModal] = useState(false);

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     const OpenWalletModal = () => {
//         setOpenWalletModal(!openWalletModal);
//     }

//     return (
//         <div className="relative flex flex-col h-screen">
//             {/* Mobile Navbar */}
//             <div className='bg-[#f5a7ca] py-1 flex items-center pr-4 absollute top-0 left-0 z-30'>
//                 <div className="cursor-pointer text-2xl text-left" onClick={toggleSidebar}>
//                     <RiMenu3Line className="font-bold text-3xl hover:text-gray-700 ml-4" />
//                 </div>
//                 {/* <h1 className="text-4xl text-gray-600">Dashboard</h1> */}
//                 <div className="flex flex-1 items-center justify-between">
//                     <div className="flex flex-col ml-5">
//                         <h3 className="font-medium"><span className="font-bold">Rs.</span> 2708.38</h3>
//                         <button className="active:bg-[#f175a9] active:text-white transition-all border-[2px] text-sm text-[#e27] border-[#e27] px-2 py-1" onClick={OpenWalletModal}>Add Amount</button>
//                     </div>
//                     <div className="flex items-center hover:text-gray-700 cursor-pointer">
//                         <FaRegUser />
//                         <h3 className="font-bold">Pritesh Sir</h3>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Sidebar */}
//             <div className={`fixed top-0 left-0 h-full bg-white overflow-y-auto bg-opacity-95 shadow-2xl transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-3/4 md:w-1/2 lg:w-1/3 z-40`}>
//                 <div className="flex justify-between px-4 pt-4">
//                     <img src="logo/logo2.png" alt="Logo" className="w-1/2" />
//                     <RxCross2 className='text-2xl font-bold' onClick={() => { setSidebarOpen(false) }} />

//                 </div>
//                 <ul className="mt-4">
//                     <li className="flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer">
//                         <IoSpeedometerOutline className="text-xl ml-2" />
//                         <span className="ml-2">Prepaid Dashboard</span>
//                     </li>
//                     <li className="flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer">
//                         <IoSpeedometerOutline className="text-xl ml-2" />
//                         <span className="ml-2">Prepaid Scheme</span>
//                     </li>
//                     <li className="flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer">
//                         <FaRegUser className="text-xl ml-2" />
//                         <span className="ml-2">Users</span>
//                     </li>
//                     <li className="flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer">
//                         <MdOutlineReportGmailerrorred className="text-xl ml-2" />
//                         <span className="ml-2">Report</span>
//                     </li>
//                     <li className="flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer">
//                         <FaIndianRupeeSign className="text-xl ml-2" />
//                         <span className="ml-2">Transaction</span>
//                     </li>
//                     <li className="flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer">
//                         <IoDocumentTextOutline className="text-xl ml-2" />
//                         <span className="ml-2">API Docs</span>
//                     </li>
//                     {/* KYC Dropdown */}
//                     <li className={`flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer ${kycDropdownOpen ? 'bg-[#f5a7ca]' : ''}`} onClick={() => setKycDropdownOpen(!kycDropdownOpen)}>
//                         <GrDocumentVerified className="text-xl ml-2" />
//                         <span className="ml-2">KYC VERIFICATION</span>
//                         <RiArrowDropUpLine className={`text-2xl ml-auto transition-transform ${kycDropdownOpen ? 'rotate-180' : ''}`} />
//                     </li>
//                     <ul className={`pl-10 transition-all ${kycDropdownOpen ? 'block' : 'hidden'}`}>
//                         <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Aadhar Validation</li>
//                         <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">GSTIN</li>
//                         <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Aadhar Upload</li>
//                         <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Pan_Info</li>
//                         <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Search Kyc lite</li>
//                         <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Pan Information V2</li>
//                         <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Enach</li>
//                         <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Payment</li>
//                     </ul>
//                     {/* Corporate Dropdown */}
//                     <li className={`flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer ${corporateDropdownOpen ? 'bg-[#f5a7ca]' : ''}`} onClick={() => setCorporateDropdownOpen(!corporateDropdownOpen)}>
//                         <MdCorporateFare className="text-xl ml-2" />
//                         <span className="ml-2">Corporate</span>
//                         <RiArrowDropUpLine className={`text-2xl ml-auto transition-transform ${corporateDropdownOpen ? 'rotate-180' : ''}`} />
//                     </li>
//                     <ul className={`pl-10 transition-all ${corporateDropdownOpen ? 'block' : 'hidden'}`}>
//                         <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">GSTIN</li>
//                     </ul>
//                     {/* Bank Verification Dropdown */}
//                     <li className={`flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer ${bankVerificationDropdownOpen ? 'bg-[#f5a7ca]' : ''}`} onClick={() => setBankVerificationDropdownOpen(!bankVerificationDropdownOpen)}>
//                         <BsBank className="text-xl ml-2" />
//                         <span className="ml-2">Bank Verification</span>
//                         <RiArrowDropUpLine className={`text-2xl ml-auto transition-transform ${bankVerificationDropdownOpen ? 'rotate-180' : ''}`} />
//                     </li>
//                     <ul className={`pl-10 transition-all ${bankVerificationDropdownOpen ? 'block' : 'hidden'}`}>
//                         <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Bank Verification</li>
//                         <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Bank IFSC</li>
//                         <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Bank Statement</li>
//                         <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Bank Analyser</li>
//                     </ul>
//                     <li className="flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer">
//                         <PiKey className="text-xl ml-2" />
//                         <span className="ml-2">Change Password</span>
//                     </li>
//                 </ul>
//             </div>


//             {/* wallet component */}
//             <div className={`container mx-auto p-6 bg-black bg-opacity-70 text-white shadow-lg fixed ${openWalletModal ? 'transition-all duration-1000 max-w-screen-sm w-full right-0' : '-right-16 w-0 transition-all duration-1000'}`}>
//                     <div className="flex justify-between pb-8">
//                         <RxCross2 className="text-4xl cursor-pointer hover:text-[#e27daa]" onClick={() => setOpenWalletModal(!openWalletModal)} />
//                         <h2 className="text-2xl font-semibold mb-4">Current Wallet Balance: {balance.toFixed(2)} ₹</h2>
//                     </div>

//                     <label htmlFor="amount" className="block text-lg mb-2">Add Amount in Wallet</label>
//                     <input
//                         type="number"
//                         id="amount"
//                         value={amount}
//                         onChange={this.handleInputChange}
//                         placeholder="Enter Wallet Amount"
//                         className="text-black w-full p-2 mb-4 border border-gray-300 rounded-md"
//                     />

//                     <div className="flex space-x-2 mb-4">
//                         <button
//                             onClick={() => this.handleOptionClick('20000')}
//                             className="flex-1 bg-[#e27daa] text-black py-2 rounded-md hover:bg-[#d46a7d] focus:outline-none"
//                         >+20,000</button>
//                         <button
//                             onClick={() => this.handleOptionClick('50000')}
//                             className="flex-1 bg-[#e27daa] text-black py-2 rounded-md hover:bg-[#d46a7d] focus:outline-none"
//                         >+50,000</button>
//                         <button
//                             onClick={() => this.handleOptionClick('100000')}
//                             className="flex-1 bg-[#e27daa] text-black py-2 rounded-md hover:bg-[#d46a7d] focus:outline-none"
//                         >+1,00,000</button>
//                     </div>

//                     <div className="flex justify-between text-lg mb-4">
//                         <div className="flex-1">
//                             <p>Tax (18%):</p>
//                             <p>Total Amount:</p>
//                         </div>
//                         <div className="flex-1 text-right">
//                             <p>{tax} ₹</p>
//                             <p>{amount} ₹</p>
//                         </div>
//                     </div>

//                     <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none">
//                         Proceed to Pay
//                     </button>
//                 </div>

//         </div>
//     );
// };

// export default MobileDashboard;






























import React, { Component } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { RiMenu3Line, RiArrowDropUpLine } from 'react-icons/ri';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { GrDocumentVerified } from 'react-icons/gr';
import { MdCorporateFare } from 'react-icons/md';
import { PiKey } from 'react-icons/pi';
import { BsBank } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { RiMenuFold2Line, RiMenuFoldLine } from 'react-icons/ri';
import { CiLogout } from "react-icons/ci";
import { Routes, Route, Link } from 'react-router-dom';
import Users from '../DashboardComponent/Users';
import PrepaidDashboard from '../DashboardComponent/PrepaidDashboard';
import UserForm from '../DashboardComponent/AddUser';
import UserAdminWallet from '../DashboardComponent/UserAdminWallet';
import { PiGridNineFill } from "react-icons/pi";
import { LuPencilLine } from "react-icons/lu";
import { BsPassport } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { TbGiftFilled } from "react-icons/tb";
import { MdOutlineCall } from "react-icons/md";
import { IoPeopleCircleOutline } from "react-icons/io5";

class MobileDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            kycDropdownOpen: false,
            corporateDropdownOpen: false,
            bankVerificationDropdownOpen: false,
            openWalletModal: false,
            amount: '',
            balance: 2708.38,
            activeMenu: this.getActiveMenu(props.location.pathname),
        };
    }


    componentDidUpdate(prevProps) {
        const { location } = this.props;
        if (location.pathname !== prevProps.location.pathname) {
            this.setState({ activeMenu: this.getActiveMenu(location.pathname) });
        }
    }

    getActiveMenu(path) {
        // Map paths to menu names
        const pathToMenu = {
            '/': 'Prepaid Dashboard',
            '/dashboard/users': 'Users',
            // Add other paths and their corresponding menu names here
        };

        return pathToMenu[path] || 'Prepaid Dashboard';
    }


    toggleSidebar = () => {
        this.setState((prevState) => ({ sidebarOpen: !prevState.sidebarOpen }));
    };

    openWalletModal = () => {
        this.setState((prevState) => ({ openWalletModal: !prevState.openWalletModal }));
    };

    handleInputChange = (e) => {
        this.setState({ amount: e.target.value });
    };

    handleOptionClick = (value) => {
        this.setState({ amount: value });
    };

    toggleDropdown = (dropdown) => {
        this.setState((prevState) => ({ [dropdown]: !prevState[dropdown] }));
    };


    toggleCourier = () => {
        this.setState({ CourierDropdownOpen: !this.state.CourierDropdownOpen });
    };

    toggleeSign = () => {
        this.setState({ eSignDropdownOpen: !this.state.eSignDropdownOpen });
    };

    toggleVideo = () => {
        this.setState({ VideoDropdownOpen: !this.state.VideoDropdownOpen });
    };

    toggleCorporate = () => {
        this.setState({ CorporateDropdownOpen: !this.state.CorporateDropdownOpen });
    };
    toggleBankVerification = () => {
        this.setState({ BankVerificationDropdownOpen: !this.state.BankVerificationDropdownOpen });
    };

    toggleIVRCalling = () => {
        this.setState({ IVRCallingDropdownOpen: !this.state.IVRCallingDropdownOpen });
    };

    togglePassport = () => {
        this.setState({ PassportDropdownOpen: !this.state.PassportDropdownOpen });
    };

    toggleOther = () => {
        this.setState({ OtherDropdownOpen: !this.state.OtherDropdownOpen });
    };

    setActiveMenu = (menu) => {
        this.setState({ activeMenu: menu });
    };

    render() {
        const { location } = this.props;
        const currentUrl = location.pathname;
        console.log('path: ', currentUrl);

        const { sidebarOpen, eSignDropdownOpen, OtherDropdownOpen, PassportDropdownOpen, IVRCallingDropdownOpen, VideoDropdownOpen, amount, CourierDropdownOpen, activeMenu, balance, openWalletModal, kycDropdownOpen, CorporateDropdownOpen, BankVerificationDropdownOpen } = this.state;
        const tax = (amount * 0.18).toFixed(2);
        const totalAmount = (parseFloat(amount) + parseFloat(tax)).toFixed(2);

        return (
            <div className="relative flex flex-col h-screen">
                {/* Mobile Navbar */}
                <div className='bg-[#e6e4e4] py-1 flex items-center pr-4 w-full fixed top-0 left-0 z-30'>
                    <div className="cursor-pointer text-2xl text-left" onClick={this.toggleSidebar}>
                        <RiMenu3Line className="font-bold text-3xl hover:text-gray-700 ml-4" />
                    </div>
                    <div className="flex flex-1 items-center justify-between">
                        <div className="flex flex-col ml-5">
                            <h3 className="font-medium"><span className="font-bold">Rs.</span> {balance.toFixed(2)}</h3>
                            <button
                                className="active:bg-[#f175a9] active:text-white transition-all border-[2px] text-sm text-[#e27] border-[#e27] px-2 py-1"
                                onClick={this.openWalletModal}
                            >
                                Add Amount
                            </button>
                        </div>
                        <div className="flex items-center hover:text-gray-700 cursor-pointer">
                            <FaRegUser />
                            <h3 className="font-bold">Pritesh Sir</h3>
                        </div>
                    </div>


                </div>
                <Routes>
                    <Route path="users" element={<Users />} />
                    <Route path="adduser" element={<UserForm />} />
                    <Route path="wallet" element={<UserAdminWallet />} />
                    {/* <Route path="report" element={<Report />} /> */}
                    {/* <Route path="transaction" element={<Transaction />} /> */}
                    {/* <Route path="api" element={<API />} /> */}
                    {/* <Route path="kyc-verification" element={<KycVerification />} /> */}
                    {/* <Route path="corporate" element={<Corporate />} /> */}
                    {/* <Route path="bank-verification" element={<BankVerification />} /> */}
                    {/* <Route path="change-password" element={<ChangePassword />} /> */}
                    {/* Default Route */}
                    <Route path="/" element={<PrepaidDashboard />} />
                </Routes>

                {/* Mobile Sidebar */}
                <div className={`fixed top-0 left-0 h-full overflow-y-auto bg-opacity-95 shadow-2xl transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-3/4 md:w-1/2 lg:w-1/3 z-40`} style={{ backgroundImage: 'url("/sidebar10.png")', backgroundPosition: 'bottom' }}>
                    <div className="flex justify-between px-4 pt-2 bg-white">
                        <img src="/logo/logo2.png" alt="Logo" className="w-1/2" />
                        <RxCross2 className='text-2xl font-bold' onClick={() => this.setState({ sidebarOpen: false })} />
                    </div>
                    <ul className="mt-4 text-white">
                        <Link to='/dashboard'><li className={`flex items-center py-3 px-4 transition-all cursor-pointer ${activeMenu === 'Prepaid Dashboard' ? 'bg-[#00acc1]' : ''} `} onClick={() => this.setActiveMenu('Prepaid Dashboard')} >
                            <IoSpeedometerOutline className="text-xl ml-2" />
                            <span className="ml-2">Prepaid Dashboard</span>
                        </li></Link>

                        <Link to='/dashboard/wallet'><li className={`flex items-center py-3 px-4 transition-all cursor-pointer ${activeMenu === 'Wallet Credit/Debit' ? 'bg-[#00acc1]' : ''} `} onClick={() => this.setActiveMenu('Wallet Credit/Debit')} >
                            <FaWallet className="text-xl ml-2" />
                            <span className="ml-2">Wallet Credit/Debit</span>
                        </li></Link>

                        <Link to='/dashboard'><li className={`flex items-center py-3 px-4 transition-all cursor-pointer ${activeMenu === 'API Master' ? 'bg-[#00acc1]' : ''} `} onClick={() => this.setActiveMenu('API Master')} >
                            <PiGridNineFill className="text-xl ml-2" />
                            <span className="ml-2">API Master</span>
                        </li></Link>

                        <Link to='/dashboard'><li className={`flex items-center py-3 px-4 transition-all cursor-pointer ${activeMenu === 'Scheme Type Master' ? 'bg-[#00acc1]' : ''} `} onClick={() => this.setActiveMenu('Scheme Type Master')} >
                            <PiGridNineFill className="text-xl ml-2" />
                            <span className="ml-2">Scheme Type Master</span>
                        </li></Link>

                        <Link to='/dashboard/users'><li className={`flex items-center py-3 px-4 transition-all cursor-pointer ${activeMenu === 'Users' ? 'bg-[#00acc1]' : ''} `} onClick={() => this.setActiveMenu('Users')}>
                            <FaRegUser className="text-xl ml-2" />
                            <span className="ml-2">Users</span>
                        </li></Link>
                        <li className="flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer">
                            <MdOutlineReportGmailerrorred className="text-xl ml-2" />
                            <span className="ml-2">Report</span>
                        </li>
                        <li className="flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer">
                            <FaIndianRupeeSign className="text-xl ml-2" />
                            <span className="ml-2">Transaction</span>
                        </li>
                        <li className="flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer">
                            <IoDocumentTextOutline className="text-xl ml-2" />
                            <span className="ml-2">API Docs</span>
                        </li>
                        {/* KYC Dropdown */}
                        <li
                            className={`flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer ${kycDropdownOpen ? 'bg-[#f5a7ca]' : ''}`}
                            onClick={() => this.toggleDropdown('kycDropdownOpen')}
                        >
                            <GrDocumentVerified className="text-xl ml-2" />
                            <span className="ml-2">KYC VERIFICATION</span>
                            <RiArrowDropUpLine className={`text-2xl ml-auto transition-transform ${kycDropdownOpen ? 'rotate-180' : ''}`} />
                        </li>
                        <ul className={`pl-10 transition-all ${kycDropdownOpen ? 'block' : 'hidden'}`}>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">PAN Card</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Aadhar Validation</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Voter ID</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Driving License</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">RC Validation</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">RC Full Validation</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">RC Validation old lite</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Passport Upload</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Passport Verification</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">PAN Card Upload</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Aadhar Upload</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Voter ID Upload</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Driving License Upload</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Aadhar OTP Generate</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Aadhar OTP Submit</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Aadhar Masking</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Passport Create Client</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Fast Tag Information</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">PAN Details Unuse</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Pan_info</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Pancard_upload</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">RC Validation Lite</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">RC Short</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Search Kyc</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Search Kyc lite</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Pan Information V2</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Enach</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Payment</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Search Kyc digitap</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">PAN OCR</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Aadhar OCR Masking</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Driving License OCR</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Voter ID OCR</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Passport OCR</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Extract PAN Card Text</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Extract Aadhar Text</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Extract Voter Text</li>
                            <li className="py-1 px-4 transition-all active:bg-gray-600 hover:text-white cursor-pointer">Driving License Extract Text</li>
                        </ul>


                        {/* courier */}
                        <li className={`flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer ${CourierDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.toggleCourier}>
                            <TbGiftFilled className="text-xl ml-2" />
                            <li className="ml-2">Courier</li>
                            <RiArrowDropUpLine className={`text-2xl ml-auto transition-transform ${CourierDropdownOpen ? 'rotate-180' : ''}`} />
                        </li>

                        {/* eSign */}
                        <li className={`flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer ${eSignDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.toggleeSign}>
                            <LuPencilLine className="text-xl ml-2" />
                            <li className="ml-2">eSign</li>
                            <RiArrowDropUpLine className={`text-2xl ml-auto transition-transform ${eSignDropdownOpen ? 'rotate-180' : ''}`} />
                        </li>
                        <ul
                            className={`pl-10 transition-all ${eSignDropdownOpen ? 'block' : 'hidden'}`}
                        >
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">eSign Docboyz</li>
                        </ul>


                        {/* video kyc */}
                        <div className={`flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer ${VideoDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.toggleVideo}>
                            <IoMdVideocam className="text-xl ml-2" />
                            <li className="ml-2">Video Kyc</li>
                            <RiArrowDropUpLine className={`text-2xl ml-auto transition-transform ${VideoDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                        <ul
                            className={`pl-10 transition-all ${VideoDropdownOpen ? 'block' : 'hidden'}`}
                        >
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Docboyz_video_kyc</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Face Match</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Face Match v1</li>
                        </ul>


                        {/* ivr calling */}
                        <li className={`flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer ${IVRCallingDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.toggleIVRCalling}>
                            <MdOutlineCall className="text-xl ml-2" />
                            <li className="ml-2">IVR Calling</li>
                            <RiArrowDropUpLine className={`text-2xl ml-auto transition-transform ${IVRCallingDropdownOpen ? 'rotate-180' : ''}`} />
                        </li>

                        {/* passport */}
                        <li className={`flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer ${PassportDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.togglePassport}>
                            <BsPassport className="text-xl ml-2" />
                            <li className="ml-2">Passport</li>
                            <RiArrowDropUpLine className={`text-2xl ml-auto transition-transform ${PassportDropdownOpen ? 'rotate-180' : ''}`} />
                        </li>


                        {/* Corporate Dropdown */}
                        <li className={`flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer ${CorporateDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.toggleCorporate}>
                            <MdCorporateFare className="text-xl ml-2" />
                            <li className='ml-2'>Corporate</li>
                            <RiArrowDropUpLine className={`text-2xl ml-auto transition-transform ${CorporateDropdownOpen ? 'rotate-180' : ''}`} />
                        </li>
                        <ul
                            className={`pl-10 transition-all ${CorporateDropdownOpen ? 'block' : 'hidden'}`}
                        >
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">CIN</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">DIN</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">GSTIN</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">GSTIN With Confidence</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">GSTIN Return</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Details</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">CIN Advance</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">CIN Basic</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">GSTIN Basic</li>
                        </ul>


                        {/* Bank Verification Dropdown */}
                        <li className={`flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer ${BankVerificationDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.toggleBankVerification}>
                            <BsBank className="text-xl ml-2" />
                            <li className='ml-2'>Bank Verification</li>
                            <RiArrowDropUpLine className={`text-2xl ml-auto transition-transform ${BankVerificationDropdownOpen ? 'rotate-180' : ''}`} />
                        </li>
                        <ul
                            className={`pl-10 transition-all ${BankVerificationDropdownOpen ? 'block' : 'hidden'}`}
                        >
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Bank Verification</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Bank IFSC</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Bank Statement</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Bank Analyser</li>
                        </ul>


                        {/* Other */}
                        <div className={`flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer ${OtherDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.toggleOther}>
                            <IoPeopleCircleOutline className="text-xl ml-2" />
                            <li className="ml-2">Other</li>
                            <RiArrowDropUpLine className={`text-2xl ml-auto transition-transform ${OtherDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                        <ul
                            className={`pl-10 transition-all ${OtherDropdownOpen ? 'block' : 'hidden'}`}
                        >
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Electricity</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Shop Establishment</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Telecom</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Usage</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Credit</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">FSSI</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">UPI Validation</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">CreditURL</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Udyam Search</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Udhyog Adhar</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">cKycSearch</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">cKycDownload</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Credit_Score</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">EcreditWithPdf</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Verify Address</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Get Place</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Create Geofence</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Get Coordinate</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Autocomplate</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Pan To GST</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Verify Email</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Verify Email Status</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Land</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Community Area</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Detection Emotion</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Detected Face</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Image Scanner</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Pincode</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Aadhar OCR</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">By PAN Card</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Predict PPL</li>
                        </ul>


                        {/* change password */}
                        <li className="flex items-center py-3 px-4 transition-all active:bg-[#f5a7ca] cursor-pointer">
                            <PiKey className="text-xl ml-2" />
                            <span className="ml-2">Change Password</span>
                        </li>

                        <div className="button font-montserrat font-light flex items-center cursor-pointer py-2 transition-all gap-x-2 mt-2 px-4 bg-transparent border-[1.5px] mx-auto border-[#00acc1] rounded-sm text-white hover:bg-[#00acc1] w-fit active:bg-[#21a2b3]">
                            <CiLogout className="text-xl" />
                            <li>Logout</li>
                        </div>
                    </ul>
                </div>

                {/* Wallet Modal */}
                <div className={`fixed right-0 top-0 h-full bg-black bg-opacity-70 text-white shadow-lg transition-transform transform ${openWalletModal ? 'translate-x-0' : 'translate-x-full'} w-[90vw] px-6 max-w-screen-sm z-50`}>
                    <div className="flex flex-col justify-between">
                        <RxCross2 className="mt-4 text-4xl cursor-pointer hover:text-[#e27daa]" onClick={this.openWalletModal} />
                        <h2 className="text-xl font-semibold mb-4 mt-10">Current Balance: <span className='text-xl font-bold'>{balance.toFixed(2)} ₹</span></h2>
                    </div>

                    <label htmlFor="amount" className="block text-lg text-left mb-2 mt-6">Add Amount in Wallet</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={this.handleInputChange}
                        placeholder="Enter Wallet Amount"
                        className="text-black w-full p-2 mb-4 border border-gray-300 rounded-md px-6"
                    />

                    <div className="flex space-x-2 text-left mb-4">
                        <button
                            onClick={() => this.handleOptionClick('20000')}
                            className="flex-1 bg-[#e27daa] text-black py-2 rounded-md hover:bg-[#d46a7d] focus:outline-none"
                        >+20,000</button>
                        <button
                            onClick={() => this.handleOptionClick('50000')}
                            className="flex-1 bg-[#e27daa] text-black py-2 rounded-md hover:bg-[#d46a7d] focus:outline-none"
                        >+50,000</button>
                        <button
                            onClick={() => this.handleOptionClick('100000')}
                            className="flex-1 bg-[#e27daa] text-black py-2 pr-1 rounded-md hover:bg-[#d46a7d] focus:outline-none"
                        >+1,00,000</button>
                    </div>

                    <div className="flex justify-between text-lg mb-4">
                        <div className="flex-1">
                            <p className='mb-1'>Tax (18%):</p>
                            <p>Total Amount:</p>
                        </div>
                        <div className="flex-1 text-right">
                            <p>{tax} ₹</p>
                            <p>{amount} ₹</p>
                        </div>
                    </div>

                    <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none">
                        Proceed to Pay
                    </button>
                </div>
            </div>
        );
    }
}

export default MobileDashboard;
