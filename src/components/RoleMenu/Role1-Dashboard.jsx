// // original code
// import axios from "axios";
// import Cookies from "js-cookie";
// import React, { Component } from "react";
// import { FaRegUser } from "react-icons/fa";
// import { GrDocumentVerified } from "react-icons/gr";
// import { RiArrowDropUpLine } from "react-icons/ri";
// import { RiMenuFold2Line, RiMenuFoldLine } from "react-icons/ri";
// import { FaIndianRupeeSign } from "react-icons/fa6";
// import { IoDocumentTextOutline } from "react-icons/io5";
// import { PiKey } from "react-icons/pi";
// import { RxCross2 } from "react-icons/rx";
// import { CiLogout } from "react-icons/ci";
// import { Link, Routes, Route } from "react-router-dom";
// import "../../App.css";
// import Users from "../DashboardComponent/Users";
// import PrepaidDashboard from "../DashboardComponent/PrepaidDashboard";
// import { MdDashboard } from "react-icons/md";
// import UserForm from "../DashboardComponent/AddUser";
// import UserAdminWallet from "../DashboardComponent/UserAdminWallet";
// import PanCardVerification from "../DashboardComponent/PAN/PanCardValidation";
// import PanCardInfo from "../DashboardComponent/PAN/PanCardInfo";
// import PanCardOCR from "../DashboardComponent/PAN/PanCardOCR";
// import PanCardUpload from "../DashboardComponent/PAN/PanCardUpload";
// import PanDetails from "../DashboardComponent/PAN/PanDetails";
// import PanCardGST from "../DashboardComponent/PAN/PanCardGST";
// import BankAccountVerification from "../../pages/BankAccountVerification";
// import { MdCorporateFare } from "react-icons/md";
// class Role1_Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sidebarOpen: false,
//       kycDropdownOpen: false,
//       CorporateDropdownOpen: false,
//       BankVerificationDropdownOpen: false,
//       CourierDropdownOpen: false,
//       eSignDropdownOpen: false,
//       VideoDropdownOpen: false,
//       openWalletModal: false,
//       IVRCallingDropdownOpen: false,
//       PassportDropdownOpen: false,
//       OtherDropdownOpen: false,
//       amount: "",
//       balance: 2708.38,
//       activeMenu: this.getActiveMenu(props.location.pathname),
//       kycVerifyMenus: [],
//       corporateMenus: [],
//       bankVerificationMenus: [],
//       groupIdArray: [],
//       kycDropdownOpen: false,
//       CorporateDropdownOpen: false,
//       BankVerificationDropdownOpen: false
//     };
//   }

//   componentDidMount() {
//     this.fetchUserSpecificApiGroupId();
//     this.fetchApiMaster();
//   }

//   fetchApiMaster = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/api/apimaster");
//       const data = response.data;
//       if (this.state.groupIdArray.includes(1)) {
//         const kycverifymenus = data.filter((menu) => menu.api_group_id === 1);
//         this.setState({ kycVerifyMenus: kycverifymenus });
//       }
//       if (this.state.groupIdArray.includes(6)) {
//         const corporatemenus = data.filter((menu) => menu.api_group_id === 6);
//         this.setState({ corporateMenus: corporatemenus });
//       }

//       if (this.state.groupIdArray.includes(7)) {
//         const bankverification = data.filter((menu) => menu.api_group_id === 7);
//         this.setState({ bankVerificationMenus: bankverification });
//       }
//     } catch (error) {
//       console.error("There was an error fetching the menus!", error);
//     }
//   };

//   fetchUserSpecificApiGroupId = async () => {
//     const token = Cookies.get("authToken");
//     if (!token) {
//       this.setState({ error: "Token not found" });
//       return;
//     }

//     try {
//       const response = await axios.get(
//         `http://localhost:8000/api/getspecificuserapi/${token}`
//       );
//       const groupIdArray = response.data;
//       this.setState({ groupIdArray });
//     } catch (error) {
//       this.setState({ error: "Error fetching user data" });
//     }
//   };

//   componentDidUpdate(prevProps) {
//     const { location } = this.props;
//     if (location.pathname !== prevProps.location.pathname) {
//       this.setState({ activeMenu: this.getActiveMenu(location.pathname) });
//     }
//   }

//   getActiveMenu(path) {
//     const pathToMenu = {
//       "/": "Prepaid Dashboard",
//       "/dashboard/users": "Users",
//     };

//     return pathToMenu[path] || "Prepaid Dashboard";
//   }

//   handleInputChange = (e) => {
//     this.setState({ amount: e.target.value });
//   };

//   handleOptionClick = (value) => {
//     this.setState({ amount: value });
//   };

//   toggleKYC = () => {
//     this.setState({ kycDropdownOpen: !this.state.kycDropdownOpen });
//   };

//   toggleCourier = () => {
//     this.setState({ CourierDropdownOpen: !this.state.CourierDropdownOpen });
//   };

//   toggleeSign = () => {
//     this.setState({ eSignDropdownOpen: !this.state.eSignDropdownOpen });
//   };

//   toggleVideo = () => {
//     this.setState({ VideoDropdownOpen: !this.state.VideoDropdownOpen });
//   };

//   toggleIVRCalling = () => {
//     this.setState({
//       IVRCallingDropdownOpen: !this.state.IVRCallingDropdownOpen,
//     });
//   };

//   togglePassport = () => {
//     this.setState({ PassportDropdownOpen: !this.state.PassportDropdownOpen });
//   };

//   toggleOther = () => {
//     this.setState({ OtherDropdownOpen: !this.state.OtherDropdownOpen });
//   };

//   openWalletModal = () => {
//     this.setState({ openWalletModal: true });
//   };

//   toggleCorporate = () => {
//     this.setState({ CorporateDropdownOpen: !this.state.CorporateDropdownOpen });
//   };
//   toggleBankVerification = () => {
//     this.setState({
//       BankVerificationDropdownOpen: !this.state.BankVerificationDropdownOpen,
//     });
//   };

//   setActiveMenu = (menu) => {
//     this.setState({ activeMenu: menu });
//   };

//   render() {
//     const {
//       sidebarOpen,
//       amount,
//       activeMenu,
//       balance,
//       openWalletModal,
//       kycVerifyMenus,
//       corporateMenus,
//       bankVerificationMenus,
//       kycDropdownOpen,
//       CorporateDropdownOpen,
//       BankVerificationDropdownOpen
//     } = this.state;
//     const tax = (amount * 0.18).toFixed(2);
//     const totalAmount = (parseFloat(amount) + parseFloat(tax)).toFixed(2);
//     return (
//       // sidebar
//       <div className="font-halvetica hidden md:flex relative">
//         {/* <div className={`${sidebarOpen ? 'w-0' : 'w-96'} shadow-2xl transition-all h-screen bg-[#e27daa] bg-opacity-10`}> */}
//         <div
//           className={`sidebar-transition fixed shadow-2xl min-h-screen max-h-screen overflow-y-auto bg-black ${
//             sidebarOpen ? "close" : "w-[22vw]"
//           }`}
//           style={{
//             backgroundImage: 'url("/sidebar10.png")',
//             backgroundPosition: "bottom",
//           }}
//         >
//           <div className="h-[11%] bg-white border-b-[1px] border-b-white">
//             <img src="/logo/logo2.png" alt="Logo" className="w-1/2 pl-4" />
//           </div>
//           {!sidebarOpen && (
//             <ul className="flex flex-col justify-between min-h-[89%] mt-1 text-sm px-4 gap-y-1">
//               <Link to="/dashboard">
//                 <div
//                   className={`button flex font-montserrat font-light cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white ${
//                     activeMenu === "Prepaid Dashboard" ? "bg-[#00acc1]" : ""
//                   }`}
//                   onClick={() => this.setActiveMenu("Prepaid Dashboard")}
//                 >
//                   <MdDashboard className="text-2xl ml-8" />
//                   <li>Dashboard</li>
//                 </div>
//               </Link>

//               <div
//                 className={`button font-montserrat font-light flex cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${
//                   activeMenu === "Transaction" ? "bg-[#00acc1]" : ""
//                 }`}
//                 onClick={() => this.setActiveMenu("Transaction")}
//               >
//                 <FaIndianRupeeSign className="text-xl ml-8" />
//                 <li>Transaction</li>
//               </div>

//               <div
//                 className={`button font-montserrat font-light flex cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${
//                   activeMenu === "API Docs" ? "bg-[#00acc1]" : ""
//                 }`}
//                 onClick={() => this.setActiveMenu("API Docs")}
//               >
//                 <IoDocumentTextOutline className="text-xl ml-8" />
//                 <li>API Docs</li>
//               </div>

//               {/* 1st dropdown */}
//               {this.state.groupIdArray.includes(1) ? (
//                 <div>
//                   <div
//                     className={`button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${
//                       kycDropdownOpen ? "bg-[#00acc1]" : ""
//                     }`}
//                     onClick={this.toggleKYC}
//                   >
//                     <GrDocumentVerified className="text-xl ml-8" />
//                     <li className="">Kyc Verification</li>
//                     <RiArrowDropUpLine
//                       className={`text-4xl ml-auto mr-6 transition-all duration-1000 ${
//                         kycDropdownOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </div>
//                   <ul
//                     className={`dropdown-transition bg-white ${
//                       kycDropdownOpen ? "pb-4 open" : ""
//                     }`}
//                   >
//                     {kycVerifyMenus.map((menu, index) => {
//                       return (
//                         <li
//                           className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer"
//                           key={menu.id}
//                         >
//                           {menu.api_name}
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </div>
//               ) : (
//                 ""
//               )}

//               {/* 2nd dropdown */}
//               {this.state.groupIdArray.includes(6) ? (
//                 <div>
//                   <div
//                     className={`button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${
//                       CorporateDropdownOpen ? "bg-[#00acc1]" : ""
//                     }`}
//                     onClick={this.toggleCorporate}
//                   >
//                     <MdCorporateFare className="text-xl ml-8" />
//                     <li>Corporate</li>
//                     <RiArrowDropUpLine
//                       className={`text-4xl ml-auto mr-6 transition-all duration-1000 ${
//                         CorporateDropdownOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </div>
//                   <ul
//                     className={`text-left dropdown-transition bg-white ${
//                       CorporateDropdownOpen ? "pb-4 open" : ""
//                     }`}
//                   >
//                     {corporateMenus.map((menu, index) => {
//                       return (
//                         <li
//                           className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer"
//                           key={menu.id}
//                         >
//                           {menu.api_name}
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </div>
//               ) : (
//                 ""
//               )}

//               {/* 3rd dropdown */}
//               {this.state.groupIdArray.includes(7)? <div>
//                 <div
//                 className={`button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${
//                   BankVerificationDropdownOpen ? "bg-[#00acc1]" : ""
//                 }`}
//                 onClick={this.toggleBankVerification}
//               >
//                 <BsBank className="text-xl ml-8" />
//                 <li>Bank Verification</li>
//                 <RiArrowDropUpLine
//                   className={`text-4xl ml-auto mr-6 transition-all duration-1000 ${
//                     BankVerificationDropdownOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </div>
//               <ul
//                 className={`text-left dropdown-transition bg-white ${
//                   BankVerificationDropdownOpen ? "pb-4 open" : ""
//                 }`}
//               >
//                 {bankVerificationMenus.map((menu, index) => {
//                   return (
//                     <li
//                       className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer"
//                       key={menu.id}
//                     >
//                       {menu.api_name}
//                     </li>
//                   );
//                 })}
//               </ul>
//               </div> : ''}

//               <div className="button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white ">
//                 <PiKey className="text-xl ml-8" />
//                 <li>Change Password</li>
//               </div>

//               <div className="button font-montserrat font-light flex items-center cursor-pointer py-2 transition-all gap-x-2 mt-2 px-4 bg-transparent border-[1.5px] mx-auto border-[#00acc1] rounded-sm text-white hover:bg-[#00acc1] w-fit active:bg-[#21a2b3]">
//                 <CiLogout className="text-xl" />
//                 <li>Logout</li>
//               </div>
//             </ul>
//           )}
//         </div>

//         {/* navbar */}
//         <div
//           className={`ml-auto bg-[#fbfafa] min-h-screen ${
//             !sidebarOpen ? "w-[78vw]" : "w-full"
//           }`}
//         >
//           <div className="py-1 flex justify-between pr-4 items-center bg-white">
//             <div className="flex items-center">
//               <div
//                 className="cursor-pointer text-2xl"
//                 onClick={() => {
//                   this.setState({ sidebarOpen: !sidebarOpen });
//                 }}
//               >
//                 {sidebarOpen ? (
//                   <RiMenuFold2Line className="font-bold text-black text-3xl hover:text-gray-600 ml-4" />
//                 ) : (
//                   <RiMenuFoldLine className="font-bold text-3xl text-black hover:text-gray-600 ml-5" />
//                 )}
//               </div>
//               <h1 className="text-3xl ml-8 text-gray-500">Dashboard</h1>
//             </div>
//             <div className="flex items-center">
//               <div className="flex flex-col mr-10 text-white">
//                 <h3 className="font-medium text-black">
//                   Available Bal: <span className="font-bold">₹</span> 2708.38
//                 </h3>
//                 <button
//                   className="hover:bg-[#00acc1] hover:rounded-sm active:bg-transparent w-fit rounded-sm hover:text-white transition-all border-[2px] text-base text-[#00acc1] bg-transparent border-[#00acc1] px-3 py-1"
//                   onClick={this.openWalletModal}
//                 >
//                   Add Amount
//                 </button>
//               </div>
//               <div className="flex items-center mr-4 text-black hover:text-gray-600 cursor-pointer">
//                 <FaRegUser className="" />
//                 <h3 className="font-bold">Pritesh Sir</h3>
//               </div>
//             </div>
//           </div>

//           <Routes>
//             <Route path="users" element={<Users />} />
//             <Route path="adduser" element={<UserForm />} />
//             <Route path="wallet" element={<UserAdminWallet />} />
//             <Route path="pancard" element={<PanCardVerification />} />
//             <Route path="pancard-details" element={<PanCardInfo />} />
//             <Route path="pancard_ocr" element={<PanCardOCR />} />
//             <Route path="pancard_new_info" element={<PanDetails />} />
//             <Route path="pancard_upload" element={<PanCardUpload />} />
//             <Route path="pantogst" element={<PanCardGST />} />

//             <Route path="/" element={<PrepaidDashboard />} />
//           </Routes>
//         </div>

//         {/* wallet comp */}
//         <div
//           className={`container mx-auto p-6 bg-black bg-opacity-70 text-white shadow-lg fixed ${
//             openWalletModal
//               ? "transition-all duration-1000 max-w-screen-sm w-full right-0"
//               : "-right-16 w-0 transition-all duration-1000"
//           }`}
//         >
//           <div className="flex justify-between pb-8">
//             <RxCross2
//               className="text-4xl cursor-pointer hover:text-[#e27daa]"
//               onClick={() => this.setState({ openWalletModal: false })}
//             />
//             <h2 className="text-2xl font-semibold mb-4">
//               Current Wallet Balance: {balance.toFixed(2)} ₹
//             </h2>
//           </div>

//           <label htmlFor="amount" className="block text-lg mb-2">
//             Add Amount in Wallet
//           </label>
//           <input
//             type="number"
//             id="amount"
//             value={amount}
//             onChange={this.handleInputChange}
//             placeholder="Enter Wallet Amount"
//             className="text-black w-full p-2 mb-4 border border-gray-300 rounded-md"
//           />

//           <div className="flex space-x-2 mb-4">
//             <button
//               onClick={() => this.handleOptionClick("20000")}
//               className="flex-1 bg-[#afeaf1] text-black py-2 rounded-md hover:bg-[#1c9cad] focus:outline-none"
//             >
//               +20,000
//             </button>
//             <button
//               onClick={() => this.handleOptionClick("50000")}
//               className="flex-1 bg-[#afeaf1] text-black py-2 rounded-md hover:bg-[#1c9cad] focus:outline-none"
//             >
//               +50,000
//             </button>
//             <button
//               onClick={() => this.handleOptionClick("100000")}
//               className="flex-1 bg-[#afeaf1] text-black py-2 rounded-md hover:bg-[#1c9cad] focus:outline-none"
//             >
//               +1,00,000
//             </button>
//           </div>

//           <div className="flex justify-between text-lg mb-4">
//             <div className="flex-1">
//               <p>Tax (18%):</p>
//               <p>Total Amount:</p>
//             </div>
//             <div className="flex-1 text-right">
//               <p>{tax} ₹</p>
//               <p>{amount} ₹</p>
//             </div>
//           </div>

//           <button className="w-full bg-[#0c8d9e] text-white py-2 rounded-md hover:bg-[#1c9cad] focus:outline-none">
//             Proceed to Pay
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Role1_Dashboard;
