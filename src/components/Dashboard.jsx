// original code

import React, { Component } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { IoSpeedometerOutline } from "react-icons/io5";
import { RiMenuFold2Line, RiMenuFoldLine } from "react-icons/ri";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiArrowDropUpLine } from "react-icons/ri";
import { GrDocumentVerified } from "react-icons/gr";
import { PiGridNineFill } from "react-icons/pi";
import { MdCorporateFare } from "react-icons/md";
import { PiKey } from "react-icons/pi";
import { LuPencilLine } from "react-icons/lu";
import { BsBank } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { BsPassport } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { Link, Routes, Route } from "react-router-dom";
import "../App.css"
import Users from "./DashboardComponent/Users";
import PrepaidDashboard from "./DashboardComponent/PrepaidDashboard";
import { MdDashboard } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { TbGiftFilled } from "react-icons/tb";
import { MdOutlineCall } from "react-icons/md";
import { IoPeopleCircleOutline } from "react-icons/io5";
import UserForm from "./DashboardComponent/AddUser";
import UserAdminWallet from "./DashboardComponent/UserAdminWallet";
import PanCardVerification from "./DashboardComponent/PAN/PanCardValidation";
import PanCardInfo from "./DashboardComponent/PAN/PanCardInfo";
import PanCardOCR from "./DashboardComponent/PAN/PanCardOCR";
import PanCardUpload from "./DashboardComponent/PAN/PanCardUpload";
import PanDetails from "./DashboardComponent/PAN/PanDetails";
import PanCardGST from "./DashboardComponent/PAN/PanCardGST";
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            kycDropdownOpen: false,
            CorporateDropdownOpen: false,
            BankVerificationDropdownOpen: false,
            CourierDropdownOpen: false,
            eSignDropdownOpen: false,
            VideoDropdownOpen: false,
            openWalletModal: false,
            IVRCallingDropdownOpen: false,
            PassportDropdownOpen: false,
            OtherDropdownOpen: false,
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

    handleInputChange = (e) => {
        this.setState({ amount: e.target.value });
    };

    handleOptionClick = (value) => {
        this.setState({ amount: value });
    };

    toggleKYC = () => {
        this.setState({ kycDropdownOpen: !this.state.kycDropdownOpen });
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

    toggleIVRCalling = () => {
        this.setState({ IVRCallingDropdownOpen: !this.state.IVRCallingDropdownOpen });
    };

    togglePassport = () => {
        this.setState({ PassportDropdownOpen: !this.state.PassportDropdownOpen });
    };

    toggleOther = () => {
        this.setState({ OtherDropdownOpen: !this.state.OtherDropdownOpen });
    };

    openWalletModal = () => {
        this.setState({ openWalletModal: true });
    }

    toggleCorporate = () => {
        this.setState({ CorporateDropdownOpen: !this.state.CorporateDropdownOpen });
    };
    toggleBankVerification = () => {
        this.setState({ BankVerificationDropdownOpen: !this.state.BankVerificationDropdownOpen });
    };

    setActiveMenu = (menu) => {
        this.setState({ activeMenu: menu });
    };

    render() {
        const { sidebarOpen, eSignDropdownOpen, OtherDropdownOpen, PassportDropdownOpen, IVRCallingDropdownOpen, VideoDropdownOpen, amount, CourierDropdownOpen, activeMenu, balance, openWalletModal, kycDropdownOpen, CorporateDropdownOpen, BankVerificationDropdownOpen } = this.state;
        const tax = (amount * 0.18).toFixed(2);
        const totalAmount = (parseFloat(amount) + parseFloat(tax)).toFixed(2);
        return (
            // sidebar
            <div className="font-halvetica hidden md:flex relative">
                {/* <div className={`${sidebarOpen ? 'w-0' : 'w-96'} shadow-2xl transition-all h-screen bg-[#e27daa] bg-opacity-10`}> */}
                <div
                    className={`sidebar-transition fixed shadow-2xl min-h-screen max-h-screen overflow-y-auto bg-black ${sidebarOpen ? 'close' : 'w-[22vw]'}`}
                    style={{ backgroundImage: 'url("/sidebar10.png")', backgroundPosition: 'bottom' }}
                >
                    <div className="h-[11%] bg-white border-b-[1px] border-b-white">
                        <img src="/logo/logo2.png" alt="Logo" className="w-1/2 pl-4" />
                    </div>
                    {!sidebarOpen && <ul className="flex flex-col justify-between min-h-[89%] mt-1 text-sm px-4 gap-y-1">

                        <Link to='/dashboard'><div className={`button flex font-montserrat font-light cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white ${activeMenu === 'Prepaid Dashboard' ? 'bg-[#00acc1]' : ''}`} onClick={() => this.setActiveMenu('Prepaid Dashboard')}>
                            <MdDashboard className="text-2xl ml-8" />
                            <li>Prepaid Dashboard</li>
                        </div></Link>


                        <Link to='/dashboard/wallet'>
                            <div className={`button font-montserrat font-light flex cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${activeMenu === 'Wallet Credit/Debit' ? 'bg-[#00acc1]' : ''}`} onClick={() => this.setActiveMenu('Wallet Credit/Debit')}>
                                <FaWallet className="text-xl ml-8" />
                                <li>Wallet Credit/Debit</li>
                            </div></Link>

                        <div className={`button font-montserrat font-light flex cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${activeMenu === 'API Master' ? 'bg-[#00acc1]' : ''}`} onClick={() => this.setActiveMenu('API Master')}>
                            <PiGridNineFill className="text-xl ml-8" />
                            <li>API Master</li>
                        </div>

                        <div className={`button font-montserrat font-light flex cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${activeMenu === 'Scheme Type Master' ? 'bg-[#00acc1]' : ''}`} onClick={() => this.setActiveMenu('Scheme Type Master')}>
                            <PiGridNineFill className="text-xl ml-8" />
                            <li>Scheme Type Master</li>
                        </div>

                        <Link to="/dashboard/users"><div className={`button font-montserrat font-light flex cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${activeMenu === 'Users' ? 'bg-[#00acc1]' : ''}`} onClick={() => this.setActiveMenu('Users')}>
                            <FaRegUser className="text-xl ml-8" />
                            <li>Users</li>
                        </div></Link>

                        <Link to='/dashboard/report'><div className={`button font-montserrat font-light flex cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${activeMenu === 'Report' ? 'bg-[#00acc1]' : ''}`} onClick={() => this.setActiveMenu('Report')}>
                            <MdOutlineReportGmailerrorred className="text-xl ml-8" />
                            <li>Report</li>
                        </div></Link>

                        <div className={`button font-montserrat font-light flex cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${activeMenu === 'Transaction' ? 'bg-[#00acc1]' : ''}`} onClick={() => this.setActiveMenu('Transaction')}>
                            <FaIndianRupeeSign className="text-xl ml-8" />
                            <li>Transaction</li>
                        </div>

                        <div className={`button font-montserrat font-light flex cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${activeMenu === 'API Docs' ? 'bg-[#00acc1]' : ''}`} onClick={() => this.setActiveMenu('API Docs')}>
                            <IoDocumentTextOutline className="text-xl ml-8" />
                            <li>API Docs</li>
                        </div>


                        {/* 1st dropdown */}
                        <div className={`button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${kycDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.toggleKYC}>
                            <GrDocumentVerified className="text-xl ml-8" />
                            <li className="">Kyc Verification</li>
                            <RiArrowDropUpLine className={`text-4xl ml-auto mr-6 transition-all duration-1000 ${kycDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                        <ul
                            className={`dropdown-transition bg-white ${kycDropdownOpen ? 'pb-4 open' : ''}`}
                        >
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">PAN Card</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Aadhar Validation</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Voter ID</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Driving License</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">RC Validation</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">RC Full Validation</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">RC Validation old lite</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Passport Upload</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Passport Verification</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">PAN Card Upload</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Aadhar Upload</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Voter ID Upload</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Driving License Upload</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Aadhar OTP Generate</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Aadhar OTP Submit</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Aadhar Masking</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Passport Create Client</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Fast Tag Information</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">PAN Details Unuse</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Pan_info</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Pancard_upload</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">RC Validation Lite</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">RC Short</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Search Kyc</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Search Kyc lite</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Pan Information V2</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Enach</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Payment</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Search Kyc digitap</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">PAN OCR</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Aadhar OCR Masking</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Driving License OCR</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Voter ID OCR</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Passport OCR</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Extract PAN Card Text</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Extract Aadhar Text</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Extract Voter Text</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Driving License Extract Text</li>
                        </ul>


                        {/* 4th dropdown */}
                        <div className={`button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${CourierDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.toggleCourier}>
                            <TbGiftFilled className="text-xl ml-8" />
                            <li className="">Courier</li>
                            <RiArrowDropUpLine className={`text-4xl ml-auto mr-6 transition-all duration-1000 ${CourierDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>

                        {/* 5th dropdown */}
                        <div className={`button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${eSignDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.toggleeSign}>
                            <LuPencilLine className="text-xl ml-8" />
                            <li className="">eSign</li>
                            <RiArrowDropUpLine className={`text-4xl ml-auto mr-6 transition-all duration-1000 ${eSignDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                        <ul
                            className={`dropdown-transition bg-white ${eSignDropdownOpen ? 'pb-4 open' : ''}`}
                        >
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">eSign Docboyz</li>
                        </ul>


                        {/* 6th dropdown */}
                        <div className={`button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${VideoDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.toggleVideo}>
                            <IoMdVideocam className="text-xl ml-8" />
                            <li className="">Video Kyc</li>
                            <RiArrowDropUpLine className={`text-4xl ml-auto mr-6 transition-all duration-1000 ${VideoDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                        <ul
                            className={`dropdown-transition bg-white ${VideoDropdownOpen ? 'pb-4 open' : ''}`}
                        >
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Docboyz_video_kyc</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Face Match</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Face Match v1</li>
                        </ul>


                        {/* 7th dropdown */}
                        <div className={`button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${IVRCallingDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.toggleIVRCalling}>
                            <MdOutlineCall className="text-xl ml-8" />
                            <li className="">IVR Calling</li>
                            <RiArrowDropUpLine className={`text-4xl ml-auto mr-6 transition-all duration-1000 ${IVRCallingDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>


                        {/* 8th dropdown */}
                        <div className={`button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${PassportDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.togglePassport}>
                            <BsPassport className="text-xl ml-8" />
                            <li className="">Passport</li>
                            <RiArrowDropUpLine className={`text-4xl ml-auto mr-6 transition-all duration-1000 ${PassportDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>

                        {/* 2nd dropdown */}
                        <div className={`button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${CorporateDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.toggleCorporate}>
                            <MdCorporateFare className="text-xl ml-8" />
                            <li>Corporate</li>
                            <RiArrowDropUpLine className={`text-4xl ml-auto mr-6 transition-all duration-1000 ${CorporateDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                        <ul
                            className={`text-left dropdown-transition bg-white ${CorporateDropdownOpen ? 'pb-4 open' : ''}`}
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


                        {/* 3rd dropdown */}
                        <div className={`button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${BankVerificationDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.toggleBankVerification}>
                            <BsBank className="text-xl ml-8" />
                            <li>Bank Verification</li>
                            <RiArrowDropUpLine className={`text-4xl ml-auto mr-6 transition-all duration-1000 ${BankVerificationDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                        <ul
                            className={`text-left dropdown-transition bg-white ${BankVerificationDropdownOpen ? 'pb-4 open' : ''}`}
                        >
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Bank Verification</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Bank IFSC</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Bank Statement</li>
                            <li className="w-3/4 mx-auto text-left mt-2 py-1 px-4 transition-all hover:bg-gray-600 hover:text-white cursor-pointer">Bank Analyser</li>
                        </ul>


                        {/* 9th dropdown */}
                        <div className={`button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white hover:bg-[#00acc1] active:bg-[#21a2b3] ${OtherDropdownOpen ? 'bg-[#00acc1]' : ''}`} onClick={this.toggleOther}>
                            <IoPeopleCircleOutline className="text-xl ml-8" />
                            <li className="">Other</li>
                            <RiArrowDropUpLine className={`text-4xl ml-auto mr-6 transition-all duration-1000 ${OtherDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                        <ul
                            className={`dropdown-transition bg-white ${OtherDropdownOpen ? 'pb-4 open' : ''}`}
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


                        <div className="button font-montserrat font-light flex items-center cursor-pointer py-3 transition-all gap-x-2 rounded-sm text-white ">
                            <PiKey className="text-xl ml-8" />
                            <li>Change Password</li>
                        </div>

                        <div className="button font-montserrat font-light flex items-center cursor-pointer py-2 transition-all gap-x-2 mt-2 px-4 bg-transparent border-[1.5px] mx-auto border-[#00acc1] rounded-sm text-white hover:bg-[#00acc1] w-fit active:bg-[#21a2b3]">
                            <CiLogout className="text-xl" />
                            <li>Logout</li>
                        </div>


                    </ul>}
                </div>

                {/* navbar */}
                <div className={`ml-auto bg-[#fbfafa] min-h-screen ${!sidebarOpen ? 'w-[78vw]' : 'w-full'}`}>
                    <div className="py-1 flex justify-between pr-4 items-center bg-white">
                        <div className="flex items-center">
                            <div className="cursor-pointer text-2xl" onClick={() => { this.setState({ sidebarOpen: !sidebarOpen }) }}>{sidebarOpen ? <RiMenuFold2Line className="font-bold text-black text-3xl hover:text-gray-600 ml-4" /> : <RiMenuFoldLine className="font-bold text-3xl text-black hover:text-gray-600 ml-5" />}</div>
                            <h1 className="text-3xl ml-8 text-gray-500">Dashboard</h1>
                        </div>
                        <div className="flex items-center">
                            <div className="flex flex-col mr-10 text-white">
                                <h3 className="font-medium text-black">Available Bal: <span className="font-bold">
                                    ₹</span> 2708.38</h3>
                                <button className="hover:bg-[#00acc1] hover:rounded-sm active:bg-transparent w-fit rounded-sm hover:text-white transition-all border-[2px] text-base text-[#00acc1] bg-transparent border-[#00acc1] px-3 py-1" onClick={this.openWalletModal}>Add Amount</button>
                            </div>
                            <div className="flex items-center mr-4 text-black hover:text-gray-600 cursor-pointer">
                                <FaRegUser className="" />
                                <h3 className="font-bold">Pritesh Sir</h3>
                            </div>
                        </div>
                    </div>

                    <Routes>
                        <Route path="users" element={<Users />} />
                        <Route path="adduser" element={<UserForm />} />
                        <Route path="wallet" element={<UserAdminWallet />} />
                        <Route path="pancard" element={<PanCardVerification />} />
                        <Route path="pancard-details" element={<PanCardInfo />} />
                        <Route path="pancard_ocr" element={<PanCardOCR />} />
                        <Route path="pancard_new_info" element={<PanDetails />} />
                        <Route path="pancard_upload" element={<PanCardUpload />} />
                        <Route path="pantogst" element={<PanCardGST />} />
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
                </div>



                {/* wallet comp */}
                <div className={`container mx-auto p-6 bg-black bg-opacity-70 text-white shadow-lg fixed ${openWalletModal ? 'transition-all duration-1000 max-w-screen-sm w-full right-0' : '-right-16 w-0 transition-all duration-1000'}`}>
                    <div className="flex justify-between pb-8">
                        <RxCross2 className="text-4xl cursor-pointer hover:text-[#e27daa]" onClick={() => this.setState({ openWalletModal: false })} />
                        <h2 className="text-2xl font-semibold mb-4">Current Wallet Balance: {balance.toFixed(2)} ₹</h2>
                    </div>

                    <label htmlFor="amount" className="block text-lg mb-2">Add Amount in Wallet</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={this.handleInputChange}
                        placeholder="Enter Wallet Amount"
                        className="text-black w-full p-2 mb-4 border border-gray-300 rounded-md"
                    />

                    <div className="flex space-x-2 mb-4">
                        <button
                            onClick={() => this.handleOptionClick('20000')}
                            className="flex-1 bg-[#afeaf1] text-black py-2 rounded-md hover:bg-[#1c9cad] focus:outline-none"
                        >+20,000</button>
                        <button
                            onClick={() => this.handleOptionClick('50000')}
                            className="flex-1 bg-[#afeaf1] text-black py-2 rounded-md hover:bg-[#1c9cad] focus:outline-none"
                        >+50,000</button>
                        <button
                            onClick={() => this.handleOptionClick('100000')}
                            className="flex-1 bg-[#afeaf1] text-black py-2 rounded-md hover:bg-[#1c9cad] focus:outline-none"
                        >+1,00,000</button>
                    </div>

                    <div className="flex justify-between text-lg mb-4">
                        <div className="flex-1">
                            <p>Tax (18%):</p>
                            <p>Total Amount:</p>
                        </div>
                        <div className="flex-1 text-right">
                            <p>{tax} ₹</p>
                            <p>{amount} ₹</p>
                        </div>
                    </div>

                    <button className="w-full bg-[#0c8d9e] text-white py-2 rounded-md hover:bg-[#1c9cad] focus:outline-none">
                        Proceed to Pay
                    </button>
                </div>
            </div>
        )
    }

}

export default Dashboard;