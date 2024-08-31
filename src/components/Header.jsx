// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { Link } from 'react-router-dom';
// // import { HiChevronDown } from 'react-icons/hi';
// // import { FiLogIn } from "react-icons/fi";

// // const Navbar = () => {
// //   const [isMenuOpen, setMenuOpen] = useState(false);
// //   const [isNavbarFixed, setNavbarFixed] = useState(false);
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleDropdown = () => setIsOpen(!isOpen);

// //   const navigate = useNavigate();

// //   const toggleMenu = () => {
// //     setMenuOpen(!isMenuOpen);
// //   };

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const scrollY = window.scrollY;
// //       // You can adjust the scroll threshold based on your design
// //       const scrollThreshold = 20;

// //       setNavbarFixed(scrollY > scrollThreshold);
// //     };

// //     window.addEventListener('scroll', handleScroll);

// //     return () => {
// //       window.removeEventListener('scroll', handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <nav className={`md:px-10 py-2 z-50 ${isNavbarFixed ? 'fixed top-0 left-0 z-50 w-full bg-white border-b-[0.5px] border-[#c6c2c2]' : 'relative bg-white'}`}>
// //       <div className="container mx-auto flex justify-between items-center">
// //         <div className="text-white leading-4">
// //           <img src='/public/logo2.png' className='w-40' />
// //         </div>

// //         <div className="md:hidden">
// //           <button onClick={toggleMenu} className="text-white focus:outline-none">
// //             {isMenuOpen ? (
// //               <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
// //               </svg>
// //             ) : (
// //               <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
// //               </svg>
// //             )}
// //           </button>
// //         </div>

// //         <ul className="hidden md:flex lg:gap-x-6 items-center md:gap-x-2 space-x-4 mb-2">
// //           <li><Link to="/" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Home</Link></li>
// //           <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Company</a></li>
// //           <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Careers</a></li>
// //           <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Blog</a></li>
// //           <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Contact Us</a></li>
// //           <div className="relative inline-block text-left">
// //             <button
// //               onClick={toggleDropdown}
// //               className="py-2 px-4 rounded-md focus:outline-none"
// //             >
// //               <div className='text-[#e27daa] hover:text-black font-myfont font-bold'><span>RegTech Services</span><HiChevronDown className="ml-2 inline" /></div>
// //             </button>
// //             <div
// //               className={`absolute left-3 right-0 top-8 z-50 mt-2 w-60 bg-white border border-gray-300 rounded-md shadow-lg transition-opacity duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
// //             >
// //               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Customer Verification</a>
// //               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Bank Account Verification</a>
// //               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">E-Kyc</a>
// //               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Video-Kyc</a>
// //               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">E-Sign</a>
// //               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Offline Aadhar</a>
// //               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Aadhar Masking</a>
// //               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">DB Fmatch</a>
// //               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">e-NACH/e-Mandate</a>
// //               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Verified Customer Acquisition</a>
// //               <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Vehicle Verification</a>
// //             </div>
// //           </div>
// //           <li className='ml-24'><a href="#" className="flex items-center px-4 py-1.5 font-bold hover:border-none hover:underline hover:text-[#e27daa] bg-white font-myfont text-[#e27daa] border-2 border-[#e27daa] cursor-pointer transition-all transition-duration: 400ms"><FiLogIn className='mr-2' />Login</a></li>

// //         </ul>
// //       </div>

// //       <div className={`md:hidden absolute top-[66.5px] right-0 min-h-screen z-50 w-2/3 bg-[#F7F7FF] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
// //         <ul className="flex flex-col items-center gap-y-16 space-y-4 py-2">
// //           <li className='mt-20'><a href="#" className="text-black text-[19px] hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800 font-Poppins">Home</a></li>
// //           <li className='mt-20'><a href="#" className="text-black text-[19px] hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800 font-Poppins">About</a></li>
// //           <li className='mt-20'><a href="#" className="text-black text-[19px] hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800 font-Poppins">Services</a></li>
// //           <li className='mt-20'><a href="#" className="text-black text-[19px] hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800 font-Poppins">Products</a></li>
// //           <li className='mt-20'><a href="#" className="text-black text-[19px] hover:text-violet-800 hover:border-b-[1.5px] hover:border-violet-800 font-Poppins">Blog</a></li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;























// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { HiChevronDown } from 'react-icons/hi';
// import { FiLogIn } from "react-icons/fi";

// class Navbar extends Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     isMenuOpen: false,
//     isNavbarFixed: false,
//     isOpen: false,
//     isServicesDropdownOpen: false,
//   };

//   this.toggleMenu = this.toggleMenu.bind(this);
//   this.toggleDropdown = this.toggleDropdown.bind(this);
//   this.handleScroll = this.handleScroll.bind(this);
// }

// componentDidMount() {
//   window.addEventListener('scroll', this.handleScroll);
// }

// componentWillUnmount() {
//   window.removeEventListener('scroll', this.handleScroll);
// }

// handleScroll() {
//   const scrollY = window.scrollY;
//   const scrollThreshold = 20;

//   this.setState({
//     isNavbarFixed: scrollY > scrollThreshold
//   });
// }

// toggleMenu() {
//   this.setState(prevState => ({
//     isMenuOpen: !prevState.isMenuOpen
//   }));
// }

// toggleDropdown() {
//   this.setState(prevState => ({
//     isOpen: !prevState.isOpen
//   }));
// }

// toggleServicesDropdown = () => {
//   this.setState(prevState => ({
//     isServicesDropdownOpen: !prevState.isServicesDropdownOpen
//   }));
// };

//   render() {
//     const { isMenuOpen, isNavbarFixed, isOpen, isServicesDropdownOpen } = this.state;

//     return (
//       <nav className={`md:px-10 py-2 z-50 ${isNavbarFixed ? 'fixed top-0 left-0 z-50 w-full bg-white border-b-[0.5px] border-[#c6c2c2]' : 'relative bg-white'}`}>
// <div className="container mx-auto flex justify-between items-center">
//   <div className="text-white leading-4">
//     <img src='public/logo2.png' className='w-40' alt="Logo" />
//   </div>

//   <div className="md:hidden">
//     <button onClick={this.toggleMenu} className="text-white focus:outline-none">
//       {isMenuOpen ? (
//         <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//         </svg>
//       ) : (
//         <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//         </svg>
//       )}
//     </button>
//   </div>

//   <ul className="hidden md:flex lg:gap-x-6 items-center md:gap-x-2 space-x-4 mb-2">
//     <li><Link to="/" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Home</Link></li>
//     <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Company</a></li>
//     <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Careers</a></li>
//     <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Blog</a></li>
//     <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Contact Us</a></li>
//     <div className="relative inline-block text-left">
//       <button
//         onClick={this.toggleDropdown}
//         className="py-2 px-4 rounded-md focus:outline-none"
//       >
//         <div className='text-[#e27daa] hover:text-black font-myfont font-bold'><span>RegTech Services</span><HiChevronDown className="ml-2 inline" /></div>
//       </button>
//       <div
//         className={`absolute left-3 right-0 top-8 z-50 mt-2 w-60 bg-white border border-gray-300 rounded-md shadow-lg transition-opacity duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
//       >
//         <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Customer Verification</a>
//         <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Bank Account Verification</a>
//         <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">E-Kyc</a>
//         <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Video-Kyc</a>
//         <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">E-Sign</a>
//         <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Offline Aadhar</a>
//         <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Aadhar Masking</a>
//         <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">DB Fmatch</a>
//         <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">e-NACH/e-Mandate</a>
//         <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Verified Customer Acquisition</a>
//         <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Vehicle Verification</a>
//       </div>
//     </div>
//     {/* <li className='ml-24'><a href="#" className="flex items-center px-4 py-1.5 font-bold hover:border-none hover:underline hover:text-[#e27daa] bg-white font-myfont text-[#e27daa] border-2 border-[#e27daa] cursor-pointer transition-all transition-duration: 400ms"><FiLogIn className='mr-2' />Login</a></li> */}

//   </ul>
//   <button className='ml-10 hidden md:flex items-center px-4 py-1.5 font-bold hover:border-none hover:underline hover:text-[#e27daa] bg-white font-myfont text-[#e27daa] border-2 border-[#e27daa] cursor-pointer transition-all transition-duration: 400ms'>
//     <a href="#" className="flex items-center">
//       <FiLogIn className='mr-2' />Login
//     </a>
//   </button>

// </div>

// <div className={`md:hidden absolute top-[66.5px] right-0 min-h-screen z-50 w-2/3 bg-[#F7F7FF] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300 overflow-y-auto`}>
//   <ul className="flex flex-col items-center space-y-4 py-2">
//     <li><Link to="/" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Home</Link></li>
//     <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Company</a></li>
//     <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Careers</a></li>
//     <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Blog</a></li>
//     <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Contact Us</a></li>

//     <li className="relative">
//       <button
//         onClick={this.toggleServicesDropdown}
//         className="flex items-center text-black font-myfont active:text-[#e27daa] focus:outline-none"
//       >
//         <span className='text-[#e27daa] active:text-black font-myfont font-bold'>RegTech Services</span>
//         <HiChevronDown
//           className={`ml-2 text-[#e27daa] transition-transform ${isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
//           style={{ transition: 'transform 0.3s ease-in-out' }}
//         />
//       </button>
//       <div
//         className={`mt-2 absolute top-full left-[-12px] w-48 bg-white border border-gray-200 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isServicesDropdownOpen ? 'min-h-auto' : 'max-h-0'}`}
//       >

//         <ul className="py-2 pb-10">
//           <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Customer Verification</a>
//           <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Bank Account Verification</a>
//           <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">E-Kyc</a>
//           <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Video-Kyc</a>
//           <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">E-Sign</a>
//           <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Offline Aadhar</a>
//           <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Aadhar Masking</a>
//           <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">DB Fmatch</a>
//           <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">e-NACH/e-Mandate</a>
//           <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Verified Customer Acquisition</a>
//           <a href="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Vehicle Verification</a>
//         </ul>
//       </div>
//     </li>
//   </ul>
//   <button className='mx-auto md:hidden flex items-center px-4 py-1.5 font-bold hover:border-none hover:underline hover:text-[#e27daa] bg-white font-myfont text-[#e27daa] border-2 border-[#e27daa] cursor-pointer transition-all transition-duration: 400ms'>
//     <a href="#" className="flex items-center">
//       <FiLogIn className='mr-2' />Login
//     </a>
//   </button>
// </div>

//       </nav>
//     );
//   }
// }

// export default Navbar;














// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { HiChevronDown } from 'react-icons/hi';
// import { FiLogIn } from "react-icons/fi";

// class Navbar extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       isMenuOpen: false,
//       isNavbarFixed: false,
//       isOpen: false,
//       isServicesDropdownOpen: false,
//     };


//     this.toggleMenu = this.toggleMenu.bind(this);
//     this.toggleDropdown = this.toggleDropdown.bind(this);
//     this.handleScroll = this.handleScroll.bind(this);
//   }

//   componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.handleScroll);
//   }

//   handleScroll() {
//     const scrollY = window.scrollY;
//     const scrollThreshold = 20;

//     this.setState({
//       isNavbarFixed: scrollY > scrollThreshold
//     });
//   }

//   toggleMenu() {
//     this.setState(prevState => ({
//       isMenuOpen: !prevState.isMenuOpen
//     }));
//   }

//   toggleDropdown() {
//     this.setState(prevState => ({
//       isOpen: !prevState.isOpen
//     }));
//   }

//   toggleServicesDropdown = () => {
//     this.setState(prevState => ({
//       isServicesDropdownOpen: !prevState.isServicesDropdownOpen
//     }));
//   };

//   render() {

//     const { isMenuOpen, isNavbarFixed, isOpen, isServicesDropdownOpen } = this.state;
//     return (
//       // <nav className={`absolute top-0 left-0 right-0 bg-transparent flex items-center justify-between px-6 py-4 text-white z-10 ${isNavbarFixed? 'fixed top-0 left-0' : 'bg-transparent'}`}>
//       <nav className={`md:px-10 py-2 z-60  ${isNavbarFixed ? 'fixed top-0 left-0 z-0 w-full bg-white border-b-[0.5px] border-[#c6c2c2]' : 'relative bg-transparent'}`}>


//         <div className="container mx-auto flex justify-between items-center">
//           <div className="text-white leading-4">
//             <img src='public/logo/logo2.png' className='w-40' alt="Logo" />
//           </div>

//           <div className="md:hidden">
//             <button onClick={this.toggleMenu} className="text-white focus:outline-none">
//               {isMenuOpen ? (
//                 <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                 </svg>
//               ) : (
//                 <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                 </svg>
//               )}
//             </button>
//           </div>

//           <ul className="hidden md:flex lg:gap-x-6 items-center md:gap-x-2 space-x-4 mb-2">
//             <li><Link to="/" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Home</Link></li>
//             <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Company</a></li>
//             <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Careers</a></li>
//             <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Blog</a></li>
//             <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Contact Us</a></li>
//             <div className="relative inline-block text-left">
//               <button
//                 onClick={this.toggleDropdown}
//                 className="py-2 px-4 rounded-md focus:outline-none"
//               >
//                 <div className='text-[#e27daa] hover:text-black font-myfont font-bold'><span>RegTech Services</span><HiChevronDown className="ml-2 inline" /></div>
//               </button>
//               <div
//                 className={`absolute left-3 right-0 top-8 z-50 mt-2 w-60 bg-white border border-gray-300 rounded-md shadow-lg transition-opacity duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
//               >
//                 <a href="/customer_verification" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Customer Verification</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Bank Account Verification</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">E-Kyc</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Video-Kyc</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">E-Sign</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Offline Aadhar</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Aadhar Masking</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">DB Fmatch</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">e-NACH/e-Mandate</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Verified Customer Acquisition</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 hover:bg-[#e27daa]">Vehicle Verification</a>
//               </div>
//             </div>
//             {/* <li className='ml-24'><a href="#" className="flex items-center px-4 py-1.5 font-bold hover:border-none hover:underline hover:text-[#e27daa] bg-white font-myfont text-[#e27daa] border-2 border-[#e27daa] cursor-pointer transition-all transition-duration: 400ms"><FiLogIn className='mr-2' />Login</a></li> */}

//           </ul>
//           <button className='ml-10 hidden md:flex items-center px-4 py-1.5 font-bold hover:border-none hover:underline hover:text-[#e27daa] bg-white font-myfont text-[#e27daa] border-2 border-[#e27daa] cursor-pointer transition-all transition-duration: 400ms'>
//             <a href="#" className="flex items-center">
//               <FiLogIn className='mr-2' />Login
//             </a>
//           </button>

//         </div>


//       </nav>
//     );
//   }
// }

// export default Navbar;

























// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { HiChevronDown } from 'react-icons/hi';
// import { FiLogIn } from 'react-icons/fi';

// class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isMenuOpen: false,
//       isNavbarFixed: false,
//       isOpen: false,
//       isFileServiceDropdownOpen: false,
//     };

//     this.toggleMenu = this.toggleMenu.bind(this);
//     this.toggleDropdown = this.toggleDropdown.bind(this);
//     this.this.removeMenu = this.this.removeMenu.bind(this);
//     this.toggleServicesDropdown = this.toggleServicesDropdown.bind(this);
//     this.handleScroll = this.handleScroll.bind(this);
//   }

//   componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.handleScroll);
//   }

//   handleScroll() {
//     const scrollY = window.scrollY;
//     const scrollThreshold = 20;

//     this.setState({
//       isNavbarFixed: scrollY > scrollThreshold,
//     });
//   }

//   toggleMenu() {
//     this.setState(prevState => ({
//       isMenuOpen: !prevState.isMenuOpen,
//     }));
//   }

//   toggleDropdown() {
//     this.setState(prevState => ({
//       isOpen: !prevState.isOpen,
//     }));
//   }

//   toggleServicesDropdown = () => {
//     this.setState(prevState => ({
//       isServicesDropdownOpen: !prevState.isServicesDropdownOpen
//     }));
//   };

//   removeMenu(){
//     this.setState({
//       isOpen: false,
//     });
//   }

//   render() {
//     const { isMenuOpen, isNavbarFixed, isOpen, isServicesDropdownOpen } = this.state;

//     return (
//       // <nav className='md:px-10 py-2 fixed top-0 left-0 w-full bg-transparent border-gray-300 z-50'>
//       <nav className={`md:px-10 px-2 py-2 fixed top-0 left-0 w-full transition-all duration-300 ${isNavbarFixed ? 'bg-[#fff3f9] transition-all duration-400 border-gray-300 z-50' : 'md:bg-transparent bg-[#f1c2d9] z-10'}`}>
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="text-white leading-4">
//             <img src='logo/logo2.png' className='md:w-40 w-28' alt="Logo" />
//           </div>

//           <div className="md:hidden">
//             <button onClick={this.toggleMenu} className="text-black focus:outline-none">
//               {isMenuOpen ? (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                 </svg>
//               ) : (
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                 </svg>
//               )}
//             </button>
//           </div>

//           <ul className="hidden md:flex items-center space-x-4 mb-2">
//             <li><Link to="/" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-2 hover:border-[#e27daa]">Home</Link></li>
//             <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-2 hover:border-[#e27daa]">Company</a></li>
//             <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-2 hover:border-[#e27daa]">Careers</a></li>
//             <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-2 hover:border-[#e27daa]">Blog</a></li>
//             <li><a href="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-2 hover:border-[#e27daa]">Contact Us</a></li>
//             <div className="relative inline-block text-left">
//               <button onClick={this.toggleDropdown} className="py-2 px-4 rounded-md focus:outline-none">
//                 <div className='text-[#e27daa] hover:text-black font-myfont font-bold'>
//                   <span>RegTech Services</span>
//                   <HiChevronDown className="ml-2 inline" />
//                 </div>
//               </button>
//               <div className={`absolute left-0 top-full mt-2 w-60 bg-white border border-gray-300 rounded-md shadow-lg transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ zIndex: 1000 }}>
//                 <Link to="/customer_verification" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]">Customer Verification</Link>
//                 <Link to="/account_verification" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]">Bank Account Verification</Link>
//                 <Link to="/customer_verification" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]">E-Kyc</Link>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]">Video-Kyc</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]">E-Sign</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]">Offline Aadhar</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]">Aadhar Masking</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]">DB Fmatch</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]">e-NACH/e-Mandate</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]">Verified Customer Acquisition</a>
//                 <a href="#" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]">Vehicle Verification</a>
//               </div>
//             </div>
//             <button className='ml-10 hidden md:flex items-center px-4 py-1.5 font-bold hover:border-none hover:underline hover:text-[#e27daa] bg-white font-myfont text-[#e27daa] border-2 border-[#e27daa] cursor-pointer transition-all duration-400'>
//               <a href="#" className="flex items-center">
//                 <FiLogIn className='mr-2' />Login
//               </a>
//             </button>
//           </ul>

//           <div className={`md:hidden absolute md:top-[66.5px] top-[52px] right-0 min-h-screen z-50 w-2/3 bg-[#F7F7FF] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300 overflow-y-auto`}>
//             <ul className="flex flex-col items-center space-y-4 py-2">
//               <li><Link onClick={this.removeMenu} to="/" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Home</Link></li>
//               <li><Link onClick={this.removeMenu} to="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Company</Link></li>
//               <li><Link onClick={this.removeMenu} to="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Careers</Link></li>
//               <li><Link onClick={this.removeMenu} to="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Blog</Link></li>
//               <li><Link onClick={this.removeMenu} to="#" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Contact Us</Link></li>

//               <li className="relative">
//                 <button
//                   onClick={this.toggleServicesDropdown}
//                   className="flex items-center text-black font-myfont active:text-[#e27daa] focus:outline-none"
//                 >
//                   <span className='text-[#e27daa] active:text-black font-myfont font-bold'>RegTech Services</span>
//                   <HiChevronDown
//                     className={`ml-2 text-[#e27daa] transition-transform ${isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
//                     style={{ transition: 'transform 0.3s ease-in-out' }}
//                   />
//                 </button>
//                 {isServicesDropdownOpen && <div
//                   className='mt-2 w-full bg-white absolute border border-gray-200 shadow-lg max-h-screen transition-all duration-300 ease-in-out'
//                 >

//                   <ul className="py-2 pb-32">
//                     <Link onClick={this.removeMenu} to="/customer_verification" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Customer Verification</Link>
//                     <Link onClick={this.removeMenu} to="account_verification" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Bank Account Verification</Link>
//                     <Link onClick={this.removeMenu} to="e_kyc" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">E-Kyc</Link>
//                     <Link onClick={this.removeMenu} to="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Video-Kyc</Link>
//                     <Link onClick={this.removeMenu} to="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">E-Sign</Link>
//                     <Link onClick={this.removeMenu} to="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Offline Aadhar</Link>
//                     <Link onClick={this.removeMenu} to="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Aadhar Masking</Link>
//                     <Link onClick={this.removeMenu} to="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">DB Fmatch</Link>
//                     <Link onClick={this.removeMenu} to="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">e-NACH/e-Mandate</Link>
//                     <Link onClick={this.removeMenu} to="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Verified Customer Acquisition</Link>
//                     <Link onClick={this.removeMenu} to="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Vehicle Verification</Link>
//                     <button className='mt-4 mx-auto md:hidden flex items-center px-4 py-1.5 font-bold hover:border-none hover:underline hover:text-[#e27daa] bg-white font-myfont text-[#e27daa] border-2 border-[#e27daa] cursor-pointer transition-all transition-duration: 400ms'>
//                       <a href="/customer_verification" className="flex items-center">
//                         <FiLogIn className='mr-2' />Login
//                       </a>
//                     </button>
//                   </ul>
//                 </div>}
//               </li>
//             </ul>
//             <button className='mx-auto md:hidden flex items-center px-4 py-1.5 font-bold hover:border-none hover:underline hover:text-[#e27daa] bg-white font-myfont text-[#e27daa] border-2 border-[#e27daa] cursor-pointer transition-all transition-duration: 400ms'>
//               <a href="#" className="flex items-center">
//                 <FiLogIn className='mr-2' />Login
//               </a>
//             </button>
//           </div>

//         </div>
//       </nav>
//     );
//   }
// }

// export default Navbar;









import React, { Component, createRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';
import { FiLogIn } from 'react-icons/fi';
import withLocation from './withLocation';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isNavbarFixed: false,
      isOpen: false,
      isServicesDropdownOpen: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleServicesDropdown = this.toggleServicesDropdown.bind(this);
    this.removeMenu = this.removeMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.dropdownRef = createRef();
    this.buttonRef = createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('mousedown', this.handleClickOutside);
  }


  handleClickOutside = (event) => {
    if (
      this.dropdownRef.current &&
      !this.dropdownRef.current.contains(event.target) &&
      this.buttonRef.current &&
      !this.buttonRef.current.contains(event.target)
    ) {
      this.setState({ isOpen: false });
    }
  };

  handleScroll() {
    const scrollY = window.scrollY;
    const scrollThreshold = 20;

    this.setState({
      isNavbarFixed: scrollY > scrollThreshold,
    });
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  }

  toggleDropdown() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  toggleServicesDropdown() {
    this.setState(prevState => ({
      isServicesDropdownOpen: !prevState.isServicesDropdownOpen
    }));
  }

  removeMenu() {
    this.setState({
      isMenuOpen: false,
      isServicesDropdownOpen: false,
      isOpen: false,
    });
  }


  handleLinkClick = (fetchedLocation, path, id) => {
    if (path === fetchedLocation) {
      window.scrollTo({
        top: document.getElementById(id).offsetTop,
        behavior: 'smooth',
      });
    }


    this.setState({
      isMenuOpen: false,
      isServicesDropdownOpen: false,
      isOpen: false,
    });
  }

  render() {
    const { location } = this.props;
    const shouldHideFooter = location.pathname;

    const { isMenuOpen, isNavbarFixed, isOpen, isServicesDropdownOpen } = this.state;

    return (
      <nav className={`md:px-10 px-2 py-2 fixed top-0 left-0 w-full transition-all duration-300 ${isNavbarFixed ? 'bg-[#f1c2d9] border-gray-300 z-50' : 'bg-[#fff3f9] z-10'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white leading-4">
            <Link to='/'><img src='logo/logo2.png' className='md:w-36 w-28' alt="Logo" /></Link>
          </div>

          <div className="md:hidden">
            <button onClick={this.toggleMenu} className="text-black focus:outline-none">
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>

          <ul className={`hidden md:flex items-center space-x-4 mb-2 ${isNavbarFixed ? 'text-black' : 'text-gray-400'}`}>
            <div className="relative inline-block text-left"
              onMouseEnter={() => this.setState({ isOpen: true })}
              onMouseLeave={() => this.setState({ isOpen: false })}
            >
              <button onClick={this.toggleDropdown} className="py-2 px-4 rounded-md focus:outline-none">
                <div className='text-[#e27daa] hover:text-black font-myfont font-bold'>
                  <span>RegTech Services</span>
                  <HiChevronDown className="ml-2 inline" />
                </div>
              </button>
              <div className={`absolute left-0 top-full w-64 bg-white border border-gray-300 rounded-md shadow-lg transition-opacity duration-300 ease-in-out ${isOpen ? 'visible translate-y-0' : 'invisible translate-y-2'}`} style={{ zIndex: 1000 }}>
                <Link to="/customer_verification" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>Customer Verification</Link>
                <Link to="/account_verification" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>Bank Account Verification</Link>
                <Link to="/e_kyc" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>E-Kyc</Link>
                <Link to="/video_kyc" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>Video-Kyc</Link>
                <Link to="/e_sign" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>E-Sign</Link>
                <Link to="/offline_aadhar" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>Offline Aadhar</Link>
                <Link to="/aadhar_masking" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>Aadhar Masking</Link>
                <Link to="/face-match" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>DB Fmatch</Link>
                <Link to="/e-nach" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>e-NACH/e-Mandate</Link>
                <Link to="#" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={() => this.handleLinkClick(shouldHideFooter, '/', 'verified-customer-acquisition')}>Verified Customer Acquisition</Link>
                <Link to="#" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={() => this.handleLinkClick(shouldHideFooter, '/', 'vehicle-verification')}>Vehicle Verification</Link>
              </div>
            </div>
            <li><Link to="/" className="font-myfont hover:text-[#e27daa] hover:border-b-2 hover:border-[#e27daa]" onClick={this.removeMenu}>Home</Link></li>
            <li><Link to="/company" className="font-myfont hover:text-[#e27daa] hover:border-b-2 hover:border-[#e27daa]" onClick={this.removeMenu}>Company</Link></li>
            <li><Link to="/careers" className="font-myfont hover:text-[#e27daa] hover:border-b-2 hover:border-[#e27daa]" onClick={this.removeMenu}>Careers</Link></li>
            <li><Link to="/blog" className="font-myfont hover:text-[#e27daa] hover:border-b-2 hover:border-[#e27daa]" onClick={this.removeMenu}>Blog</Link></li>
            <li><Link to="contact-us" className="font-myfont hover:text-[#e27daa] hover:border-b-2 hover:border-[#e27daa]" onClick={this.removeMenu}>Contact Us</Link></li>
            {/* <div className="relative inline-block text-left">
              <button onClick={this.toggleDropdown} className="py-2 px-4 rounded-md focus:outline-none">
                <div className='text-[#e27daa] hover:text-black font-myfont font-bold'>
                  <span>RegTech Services</span>
                  <HiChevronDown className="ml-2 inline" />
                </div>
              </button>
              <div className={`absolute left-0 top-full mt-2 w-60 bg-white border border-gray-300 rounded-md shadow-lg transition-opacity duration-300 ease-in-out ${isOpen ? 'visible translate-y-0' : 'invisible translate-y-2'}`} style={{ zIndex: 1000 }}>
                <Link to="/customer_verification" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>Customer Verification</Link>
                <Link to="/account_verification" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>Bank Account Verification</Link>
                <Link to="/e_kyc" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>E-Kyc</Link>
                <Link to="/video_kyc" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>Video-Kyc</Link>
                <Link to="/e_sign" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>E-Sign</Link>
                <Link to="/offline_aadhar" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>Offline Aadhar</Link>
                <Link to="/aadhar_masking" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>Aadhar Masking</Link>
                <Link to="/face-match" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>DB Fmatch</Link>
                <Link to="/e-nach" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>e-NACH/e-Mandate</Link>
                <Link to="#" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>Verified Customer Acquisition</Link>
                <Link to="#" className="block px-4 py-2 text-gray-700 border-b border-gray-300 hover:bg-[#e27daa]" onClick={this.removeMenu}>Vehicle Verification</Link>
              </div>
            </div> */}
            <button className='ml-10 hidden md:flex items-center px-4 py-1.5 font-bold hover:border-none hover:underline hover:text-[#e27daa] bg-white font-myfont text-[#e27daa] border-2 border-[#e27daa] cursor-pointer transition-all duration-400'>
              <Link to="/login" className="flex items-center">
                <FiLogIn className='mr-2' />Login
              </Link>
            </button>
          </ul>

          <div className={`md:hidden absolute md:top-[66.5px] top-[52px] right-0 min-h-screen z-50 w-2/3 bg-[#F7F7FF] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300 overflow-y-auto`}>
            <ul className="flex flex-col items-center space-y-4 py-2">
              <li><Link onClick={this.removeMenu} to="/" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Home</Link></li>
              <li><Link onClick={this.removeMenu} to="/company" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Company</Link></li>
              <li><Link onClick={this.removeMenu} to="/careers" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Careers</Link></li>
              <li><Link onClick={this.removeMenu} to="blog" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Blog</Link></li>
              <li><Link onClick={this.removeMenu} to="contact-us" className="text-black font-myfont hover:text-[#e27daa] hover:border-b-[1.5px] hover:border-[#e27daa]">Contact Us</Link></li>

              <li className="relative w-[90%] flex justify-center">
                <button
                  onClick={this.toggleServicesDropdown}
                  className="flex items-center text-black font-myfont active:text-[#e27daa] focus:outline-none"
                >
                  <span className='text-[#e27daa] active:text-black font-myfont font-bold'>RegTech Services</span>
                  <HiChevronDown
                    className={`ml-2 text-[#e27daa] transition-transform ${isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                    style={{ transition: 'transform 0.3s ease-in-out' }}
                  />
                </button>
                {isServicesDropdownOpen && <div className='mt-6 w-full bg-white absolute border border-gray-200 shadow-lg max-h-screen transition-all duration-300 ease-in-out'>
                  <ul className="py-2 pb-32">
                    <Link onClick={this.removeMenu} to="/customer_verification" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Customer Verification</Link>
                    <Link onClick={this.removeMenu} to="/account_verification" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Bank Account Verification</Link>
                    <Link onClick={this.removeMenu} to="/e_kyc" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">E-Kyc</Link>
                    <Link onClick={this.removeMenu} to="/video_kyc" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Video-Kyc</Link>
                    <Link onClick={this.removeMenu} to="/e_sign" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">E-Sign</Link>
                    <Link onClick={this.removeMenu} to="/offline_aadhar" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Offline Aadhar</Link>
                    <Link onClick={this.removeMenu} to="/aadhar_masking" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">Aadhar Masking</Link>
                    <Link onClick={this.removeMenu} to="face-match" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">DB Fmatch</Link>
                    <Link onClick={this.removeMenu} to="/e-nach" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]">e-NACH/e-Mandate</Link>
                    <Link to="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]" onClick={() => this.handleLinkClick(shouldHideFooter, '/', 'verified-customer-acquisition')}>Verified Customer Acquisition</Link>
                    <Link to="#" className="text-sm block px-4 py-2 text-gray-700 border-b-[1px] border-gray-300 active:bg-[#e27daa]" onClick={() => this.handleLinkClick(shouldHideFooter, '/', 'vehicle-verification')}>Vehicle Verification</Link>
                    <button onClick={this.removeMenu} className='mt-4 mx-auto md:hidden flex items-center px-4 py-1.5 font-bold hover:border-none hover:underline hover:text-[#e27daa] bg-white font-myfont text-[#e27daa] border-2 border-[#e27daa] cursor-pointer transition-all duration-400'>
                      <Link to="/login" className="flex items-center">
                        <FiLogIn className='mr-2' />Login
                      </Link>
                    </button>
                  </ul>
                </div>}
              </li>
            </ul>
            <button onClick={this.removeMenu} className='mt-10 mx-auto md:hidden flex items-center px-4 py-1.5 font-bold hover:border-none hover:underline hover:text-[#e27daa] bg-white font-myfont text-[#e27daa] border-2 border-[#e27daa] cursor-pointer transition-all duration-400'>
              <Link to="login" className="flex items-center">
                <FiLogIn className='mr-2' />Login
              </Link>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default withLocation(Navbar);
